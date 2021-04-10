<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use Exception;

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
        $parameters = [
        $request->input('medicare'),
        $request->input('password'),
        $request->input('first_name'),
        $request->input('last_name'),
        $request->input('address'),
        $request->input('city'),
        $request->input('postal_code'),
        $request->input('province'),
        $request->input('citizenship'),
        $request->input('email'),
        $request->input('phone'),
        $request->input('dob'),
        ];

        if (
            !$request->filled('medicare') or !$request->filled('password') or !$request->filled('first_name') or !$request->filled('last_name')
            or !$request->filled('address') or !$request->filled('city') or !$request->filled('postal_code') or !$request->filled('province')
            or !$request->filled('citizenship') or !$request->filled('email') or !$request->filled('phone') or !$request->filled('dob')
        ) {

            return response()->json("Missing required information! Refill the form properly");
        }

        DB::insert("INSERT INTO Person ( medicare, password, first_name, last_name,address,city,postal_code,province,citizenship,email,phone,dob) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)", $parameters);


        //return something?
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function readAll(Request $request)
    {
        return response()->json(DB::select(
            "SELECT ps.*
            FROM Person ps ")
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
        /*   $personForm = array(
            $medicare = $request->input('medicare'),
            $password = $request->input('password'),
            $first_name = $request->input('first_name'),
            $last_name = $request->input('last_name'),
            $address = $request->input('address'),
            $city = $request->input('city'),
            $postal_code = $request->input('postal_code'),
            $province = $request->input('province'),
            $citizenship = $request->input('citizenship'),
            $email = $request->input('email'),
            $phone = $request->input('phone'),
            $dob = $request->input('dob')
        );
        $npersonForm = array(
            $nmedicare = $request->get('medicare'),
            $npassword = $request->get('password'),
            $nfirst_name = $request->get('first_name'),
            $nlast_name = $request->get('last_name'),
            $naddress = $request->get('address'),
            $ncity = $request->get('city'),
            $npostal_code = $request->get('postal_code'),
            $nprovince = $request->get('province'),
            $ncitizenship = $request->get('citizenship'),
            $nemail = $request->get('email'),
            $nphone = $request->get('phone'),
            $ndob = $request->get('dob')
        ); */

        // Turns out get and input are the same. How do I compare the fields and overrwrite if changed?

        $status = DB::update(
            "UPDATE Person SET medicare=?, password=?, first_name = ?, last_name = ?, address = ?, city=?, postal_code=?, province=?, citizenship=?, email=?, phone=?, dob=? WHERE person_id = ?",
            [
                $request->input('medicare'),
                $request->input('password'),
                $request->input('first_name'),
                $request->input('last_name'),
                $request->input('address'),
                $request->input('city'),
                $request->input('postal_code'),
                $request->input('province'),
                $request->input('citizenship'),
                $request->input('email'),
                $request->input('phone'),
                $request->input('dob'), $id
            ]
        );

        // what do we return?
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $status = DB::delete("DELETE FROM Person WHERE id = ?", [$id]);
        return response()->json(['status' => "Deleted successfully!"], 200);
    }
}
