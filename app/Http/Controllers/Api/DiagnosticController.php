<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;

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
        return response()->json(DB::select(
            "SELECT
                d.diagnostic_id,
                ps.first_name,
                ps.last_name,
                CONCAT(ps.first_name, ' ', ps.last_name) as 'patient_name',
                ps.dob,
                w.health_worker_id,
                CONCAT(pw.first_name, ' ', pw.last_name) as 'health_worker_name',
                hc.name as 'health_center_name',
                if(d.result, 'Positive','Negative') as 'result',
                d.diagnostic_date
            FROM Diagnostic d
            JOIN Patient p ON p.patient_id = d.patient_id
            JOIN PublicHealthCenter hc ON hc.health_center_id = d.health_center_id
            JOIN PublicHealthWorker w ON w.health_worker_id = d.health_worker_id
            JOIN Person pw ON pw.person_id = w.person_id
            JOIN Person ps ON p.person_id = ps.person_id
            ORDER BY d.diagnostic_date DESC"
        ));
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
