<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FollowUpSurveyController extends Controller
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
            'filled_by',
            'patient_id',
            'form_id',
            'created_at',
        ]));

        DB::insert("INSERT INTO FollowUpForm (filled_by, patient_id, form_id, created_at) VALUES (?,?,?,?)", [$parameters]);

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function readAll(Request $request)
    {
        return response()->json(DB::select("SELECT * FROM FollowUpForm"));
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

            $this->doUpdate('Person', $id, $FollowUpFormFieldsToUpdate);
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
