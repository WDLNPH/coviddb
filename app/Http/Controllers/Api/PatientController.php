<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use Illuminate\Http\Response;

class PatientController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function readAll(Request $request)
    {
        //
        return response()->json(DB::select("SELECT p.patient_id, ps.*
            FROM Patient p
            JOIN Person ps ON p.person_id = ps.person_id"));
    }

    /**
     * Display the specified resource.
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function readOne($id)
    {
        $result = DB::select("SELECT p.patient_id, ps.*, GROUP_CONCAT(gzp.group_id) as 'group_zones'
            FROM Patient p
            JOIN Person ps ON p.person_id = ps.person_id
            JOIN GroupZonePersonPivot gzp ON gzp.person_id = p.person_id
            WHERE p.patient_id = '{$id}'
            GROUP BY p.patient_id");

        return response()->json((count($result) > 0 ? $result[0] : null),
            count($result) > 0 ? 200 : 404);
    }

      /**
     * Create a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //if ($request->filled('first_name')) {
        //$result = DB::insert("INSERT INTO Person (`first_name`) VALUES (?)", [$request->input('first_name')]);
       //}
        $result = DB::select("SELECT FROM Person ('first_name') VALUES {{$request->input("first_name")}}");
       // $result = DB::insert("INSERT INTO Person (`first_name`) VALUES (?)", [$request->input('first_name')]);

        $personId = $result->person_id;
        $medicare = $result->medicare;

        DB::select("INSERT INTO Patient ('person_id') VALUES ({$personId})");

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
        $fieldsToUpdate = collect();
        $values = collect();

        // first_name
        if ($request->filled('first_name')) {
            $fieldsToUpdate->push('first_name = ?');
            $values->push($request->first_name);
        }

        // last_name
        if ($request->filled('first_name')) {
            $fieldsToUpdate->push('last_name = ?');
            $values->push($request->last_name);
        }

        // Should be pushed right at the end
        $values->push($id);

        DB::update("UPDATE Position SET {$fieldsToUpdate->join(', ')} WHERE id = ?", $values->toArray());
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
