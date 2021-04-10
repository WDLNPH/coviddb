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
            count($result) > 0 ? 200 : 404
        );
    }

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
        $id = $this->doInsertAndGetId('Person', $parameters);

        DB::insert("INSERT INTO Patient (person_id) VALUES (?)", [$id]);

        return response()->json(['patient_id' => $id], $id ? Response::HTTP_CREATED : Response::HTTP_BAD_REQUEST);
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
        $this->doUpdate('Person', $id, $personFieldsToUpdate);

        $fieldsUpdated = $personFieldsToUpdate->count();
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
        $status = DB::delete("DELETE FROM Patient WHERE patient_id = ?", [$id]);
        return response()->json(['status' => "Deleted successfully!"], 200);
    }
}
