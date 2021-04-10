<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;

class SymptomController extends Controller
{
    /**
     * Create a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $id = $this->doInsertAndGetId('Symptom', $request->only('symptom'));
        return response()->json(['symptom_id' => $id], $id ? Response::HTTP_CREATED : Response::HTTP_BAD_REQUEST);

    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function readAll(Request $request)
    {
        return response()->json(DB::select("SELECT * FROM Symptom"));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function readOne($id)
    {
        return response()->json(DB::select("SELECT symptom FROM Symptom WHERE $id = symptom_id"));
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

        if ($request->filled('symptom')) {
            $fieldsToUpdate->put('symptom = ?', $request->symptom);
        }

        $result = $this->doUpdate('Symptom', $id, $fieldsToUpdate);
        return response()->json(['message' => "Symptom updated successfully!"], 200);
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $status = DB::delete("DELETE FROM Symptom WHERE symptom_id = ?", [$id]);
        return response()->json(['status' => "Deleted successfully!"], 200);   
     }
    
}
