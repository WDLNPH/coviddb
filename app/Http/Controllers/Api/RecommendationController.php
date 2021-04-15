<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;

class RecommendationController extends Controller
{
    /**
     * Create a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {

        $recommendation = $request->input('recommendation');


        DB::insert("INSERT INTO Recommendation (recommendation) VALUES (?)", [$recommendation]);


    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function readAll(Request $request)
    {
        return response()->json(DB::select("SELECT * FROM recommendation"));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function readOne($id)
    {
        $result = DB::select("SELECT * FROM recommendation WHERE recommendation_id = $id");

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
        $field  = $request->input('recommendation');

        DB::update("UPDATE recommendation  SET recommendation = (?) WHERE recommendation_id = $id", [$field]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        DB::delete("DELETE FROM recommendation WHERE recommendation_id = ?", [$id]);
        return response()->json(['status' => "Deleted successfully!"], 200);
    }
}
