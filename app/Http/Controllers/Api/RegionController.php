<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use DB;

class RegionController extends Controller
{
    /**
     * Fetch all autocomplete values based on the postal code
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function autocomplete(Request $request)
    {
        //
        return response()->json(DB::select("
            SELECT pc.postal_code_id, c.city_id, c.city, r.region_id, r.region_name, p.province_code, p.province
            FROM PostalCode pc
            JOIN City c ON pc.city_id = c.city_id
            JOIN Region r ON c.region_id = r.region_id
            JOIN Province p ON p.province_code = r.province_code
            WHERE pc.`postal_code_id` like '{$request->input('postal_code')}%'"));
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function readAll(Request $request)
    {
        return response()->json(DB::select("
            SELECT r.region_id, r.region_name, a.alert_id, a.alert_info
            FROM Region r
            JOIN Alert a ON r.alert_id = a.alert_id"));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function readOne($id)
    {
        return response()->json(DB::select("
        SELECT * FROM Region WHERE $id = region_id"));
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
        $newAlertId = $request->input('alert_id');
        $currentAlertId = DB::select("SELECT alert_id FROM Region WHERE region_id = $id")[0]->alert_id ?? null;

 
        try {
            if (abs($newAlertId - $currentAlertId) > 1 && $newAlertId != 0 || !$currentAlertId) {
                return response()->json(['message' => " wowow cant jump from more than 1 alert my guy!"], 400);
            } else {

                $this->doUpdate('Region', 'region_id', $id, collect(['alert_id = ?' => $newAlertId]));
                $fieldsUpdated = 1;
                return response()->json(['message' => $fieldsUpdated . " field(s) updated successfully!"], 200);
            }
        } catch (QueryException $e) {
            if ($e->getCode() == 23000) {
                return  response()->json(['message' => "alert does not exist!"], 400);
            }
        }

    }
}
