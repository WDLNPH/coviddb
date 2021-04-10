<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
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
            SELECT pcr.postal_code, r.region_id, r.region_name
            FROM PostalCodeRegion pcr
            JOIN Region r ON pcr.region_id = r.region_id
            WHERE pcr.`postal_code` like '{$request->input('postal_code')}%'"));
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function readAll(Request $request)
    {
        return response()->json(DB::select("
            SELECT r.region_id, r.region_name, a.alert_level
            FROM Region r
            JOIN Alert a ON r.alert_level_id = a.id"));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function readOne($id)
    {
        //
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
        //
    }

}
