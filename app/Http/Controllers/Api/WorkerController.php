<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;

class WorkerController extends Controller
{
    /**
     * Create a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $parameters = collect($request->only([
            'medicare',
            'password',
            'first_name',
            'last_name',
            'address',
            'postal_code_id',
            'citizenship',
            'email',
            'phone',
            'dob',
            'region_id'
        ]));
        $pid = $this->doInsertAndGetId('Person', $parameters);

        $this->syncGroupIds($pid, $request->group_zones);
        $schedule = $request->input('schedule');
        $position_id = $request->input('position_id');
        $center_id = $request->input('health_center_id');

        DB::insert("INSERT INTO PublicHealthWorker (person_id, position_id, schedule, health_center_id) VALUES (?,?,?,?)", [$pid, $position_id, $schedule, $center_id]);


        // Don't know how to test it without postal_code_id and region_id.
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function readAll(Request $request)
    {
        return response()->json(DB::select("SELECT w.health_worker_id, pst.position, w.schedule, ps.*
            FROM PublicHealthWorker w
            JOIN Position pst ON w.position_id = pst.position_id
            JOIN Person ps ON w.person_id = ps.person_id"));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function readOne($id)
    {
        $result = DB::select("SELECT
                w.health_worker_id,
                pst.position,
                w.schedule,
                ps.*,
                c.city,
                p.province,
                r.region_name,
                GROUP_CONCAT(gzp.group_id) as 'group_zones'
            FROM PublicHealthWorker w
            JOIN Position pst ON w.position_id = pst.position_id
            JOIN Person ps ON w.person_id = ps.person_id
            LEFT JOIN GroupZonePersonPivot gzp ON gzp.person_id = ps.person_id
            JOIN PostalCode pc ON ps.postal_code_id = pc.postal_code_id
            JOIN City c ON pc.city_id = c.city_id
            JOIN Region r ON c.region_id = r.region_id
            JOIN Province p ON p.province_code = r.province_code
            WHERE w.health_worker_id = '{$id}'
            GROUP BY w.health_worker_id");

        return response()->json((count($result) > 0 ? $result[0] : null),
            count($result) > 0 ? 200 : 404
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $personFieldsToUpdate = collect();
        $workerFieldsToUpdate = collect();

        if ($request->filled('password')) {
            $personFieldsToUpdate->put('password = ?', $request->password);
        }
        if ($request->filled('first_name')) {
            $personFieldsToUpdate->put('name = ?', $request->name);
        }
        if ($request->filled('last_name')) {
            $personFieldsToUpdate->put('last_name = ?', $request->name);
        }
        if ($request->filled('address')) {
            $personFieldsToUpdate->put('address = ?', $request->address);
        }
        if ($request->filled('postal_code_id')) {
            $personFieldsToUpdate->put('postal_code_id = ?', $request->postal_code_id);
        }
        if ($request->filled('citizenship')) {
            $personFieldsToUpdate->put('email = ?', $request->email);
        }
        if ($request->filled('email')) {
            $personFieldsToUpdate->put('phone = ?', $request->phone);
        }
        if ($request->filled('phone')) {
            $personFieldsToUpdate->put('phone = ?', $request->phone);
        }
        if ($request->filled('dob')) {
            $personFieldsToUpdate->put('dob = ?', $request->dob);
        }
        if ($request->filled('region_id')) {
            $personFieldsToUpdate->put('region_id = ?', $request->region_id);
        }
        if ($request->filled('position')) {
            $workerFieldsToUpdate->put('position = ?', $request->position);
        }
        if ($request->filled('schedule')) {
            $workerFieldsToUpdate->put('schedule = ?', $request->dob);
        }

        $personId = DB::select("SELECT person_id FROM PublicHealthWorker WHERE health_worker_id = '{$id}'")[0]->person_id ?? null;

        $this->syncGroupIds($personId, $request->group_zones);
        $this->doUpdate('Person', 'person_id', $id, $personFieldsToUpdate);
        $this->doUpdate('PublicHealthWorker', 'health_worker_id', $id, $workerFieldsToUpdate);
        $fieldsUpdated = $personFieldsToUpdate->count() + $workerFieldsToUpdate->count();
        return response()->json(['message' => $fieldsUpdated . " field(s) updated successfully!"], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $status = DB::delete("DELETE FROM PublicHealthWorker WHERE health_worker_id = ?", [$id]);
        return response()->json(['status' => "Deleted successfully!"], 200);
    }
}
