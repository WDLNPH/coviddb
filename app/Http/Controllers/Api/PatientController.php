<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use Illuminate\Http\Response;
use Illuminate\Support\Str;

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
        $result = DB::select("SELECT
                p.patient_id,
                ps.*,
                c.city,
                pv.province,
                r.region_name,
                GROUP_CONCAT(gzp.group_id) as 'group_zones'
            FROM Patient p
            JOIN Person ps ON p.person_id = ps.person_id
            LEFT JOIN GroupZonePersonPivot gzp ON gzp.person_id = p.person_id
            JOIN PostalCode pc ON ps.postal_code_id = pc.postal_code_id
            JOIN City c ON pc.city_id = c.city_id
            JOIN Region r ON c.region_id = r.region_id
            JOIN Province pv ON pv.province_code = r.province_code
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
            'postal_code',
            'postal_code_id',
            'citizenship',
            'email',
            'phone',
            'dob'
        ]));

        // gotta make some modifications
        $parameters['medicare'] = str_replace(' ', '' , $parameters['medicare']);
        // Password setup
        $parameters->put('password', bcrypt(str_replace('-','',$parameters['dob'])));
        $parameters->put('api_token', Str::random(60));
        //
        $id = $this->doInsertAndGetId('Person', $parameters);

        $this->syncGroupIds($id, $request->group_zones);

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
            $personFieldsToUpdate->put('first_name = ?', $request->first_name);
        }
        if ($request->filled('last_name')) {
            $personFieldsToUpdate->put('last_name = ?', $request->last_name);
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

        $personId = DB::select("SELECT person_id FROM Patient WHERE patient_id = '{$id}'")[0]->person_id ?? null;

        if (!$personId) {
            abort(500);
        }

        $this->syncGroupIds($personId, $request->group_zones);

        $this->doUpdate('Person', 'person_id', $id, $personFieldsToUpdate);

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
