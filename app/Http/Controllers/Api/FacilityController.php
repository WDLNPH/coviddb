<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;

class FacilityController extends Controller
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
            $request->input('name'),
            $request->input('phone'),
            $request->input('address'),
            $request->input('city'),
            $request->input('province'),
            $request->input('postal_code'),
            $request->input('type'),
            $request->input('website'),
        ];

        if (
            !$request->filled('name') or !$request->filled('phone') or !$request->filled('address') or !$request->filled('city')
            or !$request->filled('province') or !$request->filled('postal_code') or !$request->filled('type') or !$request->filled('website')
        ) {

            return response()->json("Missing required information! Refill the form properly");
        }

        DB::insert("INSERT INTO PublicHealthCenter (name, phone, address, city,province, postal_code, type, website) VALUES (?,?,?,?,?,?,?,?)", $parameters);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function readAll(Request $request)
    {
        return response()->json(DB::select("SELECT `health_center_id`, `name`, `phone`, `address`, `type` FROM PublicHealthCenter"));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function readOne($id)
    {
        $result = DB::select("SELECT `health_center_id`, `name`, `city`, `province`, `postal_code`,`website`, `phone`, `address`, `type`
            FROM PublicHealthCenter WHERE health_center_id = '{$id}'");

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

        if ($request->filled('name')) {
            $fieldsToUpdate->push('name = ?');
            $values->push($request->name);
        }
        if ($request->filled('phone')) {
            $fieldsToUpdate->push('phone = ?');
            $values->push($request->phone);
        }
        if ($request->filled('address')) {
            $fieldsToUpdate->push('address = ?');
            $values->push($request->address);
        }
        if ($request->filled('city')) {
            $fieldsToUpdate->push('city = ?');
            $values->push($request->city);
        }
        if ($request->filled('first_name')) {
            $fieldsToUpdate->push('province = ?');
            $values->push($request->province);
        }
        if ($request->filled('postal_code')) {
            $fieldsToUpdate->push('postal_code = ?');
            $values->push($request->postal_code);
        }
        if ($request->filled('type')) {
            $fieldsToUpdate->push('type = ?');
            $values->push($request->type);
        }
         if ($request->filled('website')) {
            $fieldsToUpdate->push('website = ?');
            $values->push($request->website);
        }

        $values->push($id);

        DB::update("UPDATE PublicHealthCenter SET {$fieldsToUpdate->join(',')} WHERE health_center_id = ?", $values->toArray());

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
        $status = DB::delete("DELETE FROM PublicHealthCenter WHERE health_center_id = ?", [$id]);
        return response()->json(['status' => "Deleted successfully!"], 200);   
     }

    }