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
        $result = DB::select("INSERT INTO Person (`first_name`) VALUES (?)", [$request->input('first_name')]);
        
        $person_id = $result->person_id;

    
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function readAll(Request $request)
    {
        return response()->json(DB::select("SELECT w.health_worker_id, w.position, w.schedule, ps.*
            FROM PublicHealthWorker w
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
        $result = DB::select("SELECT w.health_worker_id, w.position, w.schedule, ps.*, GROUP_CONCAT(gzp.group_id) as 'group_zones'
            FROM PublicHealthWorker w
            JOIN Person ps ON w.person_id = ps.person_id
            LEFT JOIN GroupZonePersonPivot gzp ON gzp.person_id = ps.person_id
            WHERE w.health_worker_id = '{$id}'
            GROUP BY w.health_worker_id");

        return response()->json((count($result) > 0 ? $result[0] : null),
            count($result) > 0 ? 200 : 404);
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
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        //
    }
}
