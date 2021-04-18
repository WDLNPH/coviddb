<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * @param null $query
     * @param null $description
     * @return \Illuminate\Http\JsonResponse
     */
    protected function getDefaultResponse($query = null, $description = null)
    {
        $result = DB::select($query);
        $columns = [];
        if (count($result) > 0) {
            $columns = array_keys(json_decode(json_encode($result[0]), true));
        }
        return response()->json([
            'description' => $description,
            'query' => $query,
            'columns' => $columns,
            'result' => $result
        ]);
    }

    public function doInsertAndGetId($tableName, Collection $parameters)
    {
        $keys = $parameters->keys()->join(',');
        $placeholders = $parameters->map(function () { return '?';})->join(',');
        $result = DB::insert("INSERT INTO $tableName (
                $keys
            ) VALUES ($placeholders)",
            [
                ...$parameters->values(),
            ]
        );

        if ($result) {
            // Get the ID of the function you want to run back
            $id = DB::getPdo()->lastInsertId();
            return $id;
        }
        return null;
    }

    public function doUpdate($tableName, $key, $id, Collection $fieldsToUpdate)
    {
        $values = $fieldsToUpdate->values();
        // Always do this at the very end
        $values->push($id);

        return DB::update("UPDATE $tableName SET {$fieldsToUpdate->keys()->join(',')} WHERE $key = ?", $values->toArray());
    }

    public function syncGroupIds($personId, $groupZones)
    {
        $toDelete = collect();
        $toAdd = collect();

        if (!$personId) {
            abort(500);
        }

        // delete anything that isn't in the group_zones
        $dbGroupIds = collect(DB::select("SELECT gzp.group_id FROM GroupZonePersonPivot gzp
	            WHERE person_id = '{$personId}'"))->pluck('group_id')->toArray();

        // Remove every Group Zone that no longer apply
        foreach ($dbGroupIds as $dbGroupId) {
            if (!in_array($dbGroupId, $groupZones)) {
                $toDelete->push($dbGroupId);
            }
        }
        // Add groupzones that need to be added to db
        foreach ($groupZones as $groupZone) {
            if (!in_array($groupZone, $dbGroupIds)) {
                $toAdd->push($groupZone);
            }
        }

        if ($toAdd->isNotEmpty()) {
            $stringAdd = $toAdd->map(function ($groupId) use (&$personId) {
                return "($personId,$groupId)";
            })->join(',');

            // run it boi
            DB::insert("INSERT INTO GroupZonePersonPivot (`person_id`, `group_id`)
                VALUES $stringAdd");
        }
        if ($toDelete->isNotEmpty()) {
            $toDelete->map(function ($id) use (&$personId) {
                DB::insert("DELETE FROM GroupZonePersonPivot WHERE person_id=$personId and group_id=$id");
            });
        }
    }

    public function syncSymptoms($formId, $symptoms)
    {
        $toDelete = collect();
        $toAdd = collect();

        if (!$formId) {
            abort(500);
        }

        // delete anything that isn't in the symptoms
        $dbGroupIds = collect(DB::select("SELECT fs.symptom_id FROM FollowUpFormSymptomPivot fs
	            WHERE form_id = '{$formId}'"))->pluck('symptom_id')->toArray();

        // Remove every Group Zone that no longer apply
        foreach ($dbGroupIds as $dbGroupId) {
            if (!in_array($dbGroupId, $symptoms)) {
                $toDelete->push($dbGroupId);
            }
        }
        // Add groupzones that need to be added to db
        foreach ($symptoms as $symptom) {
            if (!in_array($symptom, $dbGroupIds)) {
                $toAdd->push($symptom);
            }
        }

        if ($toAdd->isNotEmpty()) {
            $stringAdd = $toAdd->map(function ($symptomId) use (&$formId) {
                return "($formId,$symptomId)";
            })->join(',');

            // run it boi
            DB::insert("INSERT INTO FollowUpFormSymptomPivot (`form_id`, `symptom_id`)
                VALUES $stringAdd");
        }
        if ($toDelete->isNotEmpty()) {
            $toDelete->map(function ($id) use (&$personId) {
                DB::insert("DELETE FROM FollowUpFormSymptomPivot WHERE form_id=$personId and symptom_id=$id");
            });
        }
    }
}
