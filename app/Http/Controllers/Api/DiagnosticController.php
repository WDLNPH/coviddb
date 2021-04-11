<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DiagnosticController extends Controller
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
            'diagnostic_date',
            'result'
        ]));
        $did = $this->doInsertAndGetId('Diagnostic', $parameters);

        return response()->json($did);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function readAll(Request $request)
    {
        //

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function readOne($id)
    {
        //return response()->json(DB::select("SELECT * FROM Diagnostic WHERE $id = diagnostic_id"));

        return response()->json(DB::select(
            "SELECT p.first_name, p.last_name, p.dob, d.result, MAX(d.diagnostic_date)
            FROM Diagnostic d JOIN Patient p ON p.patient_id=d.patient_id
            WHERE $id = diagnostic_id"
        ));
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

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $status = DB::delete("DELETE FROM Diagnostic WHERE diagnostic_id = ?", [$id]);
        return response()->json(['status' => "Deleted successfully!"], 200);
    }
}
