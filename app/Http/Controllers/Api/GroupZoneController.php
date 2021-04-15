<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use Illuminate\Http\Response;

class GroupZoneController extends Controller
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
            'name',
            'activity',
        ]));
        $id = $this->doInsertAndGetId('GroupZone', $parameters);

        return response()->json(['group_zone_id' => $id], $id ? Response::HTTP_CREATED : Response::HTTP_BAD_REQUEST);

    }

    /**
     * Display a listing of the resource.
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function readAll(Request $request)
    {
        return response()->json(DB::select("SELECT * FROM GroupZone"));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function readOne($id)
    {
        $result = DB::select("SELECT *
            FROM GroupZone WHERE group_id = '{$id}'");

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
        $groupZoneFieldsToUpdate = collect();

        if ($request->filled('activity')) {
            $groupZoneFieldsToUpdate->put('activity = ?', $request->activity);
        }
        if ($request->filled('name')) {
            $groupZoneFieldsToUpdate->put('name = ?', $request->name);
        }


        $this->doUpdate('GroupZone', 'group_id', $id, $groupZoneFieldsToUpdate);

        $fieldsUpdated = $groupZoneFieldsToUpdate->count();

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
        //
    }
}
