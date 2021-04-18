<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use Illuminate\Http\Response;

class FollowUpFormController extends Controller
{
    /**
     * Q8
     * Create a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $parameters = collect($request->only([
            'filled_by',
            'patient_id',
            'form_id',
            'created_at',
        ]));

        $id = $this->doInsertAndGetId('FollowUpForm', $parameters);

        $this->syncSymptoms($id, $request->symptoms);

        return response()->json(['form_id' => $id], $id ? Response::HTTP_CREATED : Response::HTTP_BAD_REQUEST);

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function readAll(Request $request)
    {

        #Q9
        #choose patient and choose date this will return symptom progression after THAT date for THIS patient
        #Example GET URL 127.0.0.1:8000/api/form?patient_id=1&start_date='2021-04-17 23:59:59'
        return response()->json(DB::select("SELECT (`form_id`),(`patient_id`),(`created_at`),(`symptom`) FROM followupformsymptompivot
        NATURAL JOIN followupform
        NATURAL JOIN symptom
        WHERE patient_id = $request->patient_id AND created_at > $request->start_date"));



    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function readOne($id)
    {
        return response()->json(DB::select("SELECT * FROM FollowUpForm WHERE $id = form_id"));
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
        $FollowUpFormFieldsToUpdate = collect();

        if ($request->filled('filled_by')) {
            $FollowUpFormFieldsToUpdate->put('filled_by = ?', $request->filled_by);
        }
        if ($request->filled('patient_id')) {
            $FollowUpFormFieldsToUpdate->put('patient_id = ?', $request->patient_id);
        }
        if ($request->filled('form_id')) {
            $FollowUpFormFieldsToUpdate->put('form_id = ?', $request->form_id);
        }
        if ($request->filled('created_at')) {
            $FollowUpFormFieldsToUpdate->put('created_at = ?', $request->created_at);
        }

            $this->doUpdate('Person','person_id', $id, $FollowUpFormFieldsToUpdate);
            $fieldsUpdated = $FollowUpFormFieldsToUpdate->count();
            return response()->json(['message' => $fieldsUpdated . " field(s) updated successfully!"], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        DB::delete("DELETE FROM FollowUpForm WHERE form_id = ?", [$id]);
        return response()->json(['status' => "Deleted successfully!"], 200);
    }
}
