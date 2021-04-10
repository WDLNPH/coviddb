<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;

class PersonController extends Controller
{
    /**
     * Create a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
           
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function readAll(Request $request)
    {
        return response()->json(
            DB::select(
                "SELECT ps.*
            FROM Person ps "
            )
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function readOne($id)
    {
        $result = DB::select("SELECT ps.*
            FROM Person ps
            WHERE ps.person_id = '{$id}'");

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
        $fieldsToUpdate = collect();
        $values = collect();

        if ($request->filled('password')) {
            $fieldsToUpdate->push('password = ?');
            $values->push($request->password);
        }
        if ($request->filled('first_name')) {
            $fieldsToUpdate->push('phone = ?');
            $values->push($request->phone);
        }
        if ($request->filled('last_name')) {
            $fieldsToUpdate->push('last_name = ?');
            $values->push($request->last_name);
        }
        if ($request->filled('address')) {
            $fieldsToUpdate->push('address = ?');
            $values->push($request->address);
        }
        if ($request->filled('city')) {
            $fieldsToUpdate->push('city = ?');
            $values->push($request->city);
        }
        if ($request->filled('postal_code')) {
            $fieldsToUpdate->push('postal_code = ?');
            $values->push($request->postal_code);
        }
        if ($request->filled('province')) {
            $fieldsToUpdate->push('province = ?');
            $values->push($request->province);
        }
        if ($request->filled('citizenship')) {
            $fieldsToUpdate->push('citizenship = ?');
            $values->push($request->citizenship);
        }
        if ($request->filled('email')) {
            $fieldsToUpdate->push('email = ?');
            $values->push($request->email);
        }
        if ($request->filled('phone')) {
            $fieldsToUpdate->push('phone = ?');
            $values->push($request->phone);
        }
        if ($request->filled('dob')) {
            $fieldsToUpdate->push('dob = ?');
            $values->push($request->dob);
        }

        $values->push($id);

        DB::update("UPDATE Person SET {$fieldsToUpdate->join(',')} WHERE person_id = ?", $values->toArray());

        return response()->json([$fieldsToUpdate->count() => "Field(s) updated successfully!"], 200);    

    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $status = DB::delete("DELETE FROM Person WHERE person_id = ?", [$id]);
        return response()->json(['status' => "Deleted successfully!"], 200);
    }
}
