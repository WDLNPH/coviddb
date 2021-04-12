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
}
