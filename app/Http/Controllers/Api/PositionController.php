<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;

class PositionController extends Controller
{
    /**
     * Create a newly created resource in storage.
     *  POST example
     * {"position":"new position"}
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */



    public function create(Request $request)
    {
        $parameters = collect($request->only([
            'position'
        ]));
        $pid = $this->doInsertAndGetId('Position', $parameters);

        return response()->json($pid);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function readAll(Request $request)
    {
        return response()->json(DB::select("SELECT * FROM Position"));
    }

    /**
     * Display the specified resource.
     * EXAMPLE GET
     * 127.0.0.1:8000/api/positions/1
     * return id = 1
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function readOne($id)
    {
        return response()->json(DB::select("SELECT position FROM Position WHERE $id = position_id"));
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


        $field  = $request->input('position_id');

        DB::update("UPDATE Position  SET position = (?) WHERE position_id = $id", [$field]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $status = DB::delete("DELETE FROM Position WHERE position_id = ?", [$id]);
        return response()->json(['status' => "Deleted successfully!"], 200);
    }
}
