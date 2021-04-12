<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;

class MessagesController extends Controller
{
    /**
     * Create a newly created resource in storage.
     *  
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */







    public function create(Request $request)
    {
            $parameters = collect($request->only([
            'region_id',
            'msg_date',
            'alert_id',
            'person_id',
            `message`,
        ]));
        
        DB::insert("INSERT INTO Messages (region_id, msg_date, alert_id, person_id, message) VALUES (?,?,?,?,?)", [$parameters]);


        return response()->json("Message logged!");
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function readAll(Request $request)
    {
        return response()->json(DB::select("SELECT * FROM Messages"));
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
        return response()->json(DB::select("SELECT * FROM Messages WHERE $id = msg_id"));
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
        //cant and shouldnt update a message log
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        DB::delete("DELETE FROM Messages WHERE msg_id = ?", [$id]);
        return response()->json(['status' => "Deleted successfully!"], 200);
    }
}
