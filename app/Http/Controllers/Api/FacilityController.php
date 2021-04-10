<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateFacilityRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use DB;
use Illuminate\Http\Response;
use Illuminate\Support\Collection;

class FacilityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function readAll(Request $request)
    {
        return response()->json(DB::select("SELECT `health_center_id`, `name`, `phone`, `address`, `type` FROM PublicHealthCenter"));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function readOne($id)
    {
        $result = DB::select("SELECT
                `health_center_id`, `name`, `city`, `province`,
                `postal_code`,`website`, `phone`, `address`, `type`
            FROM PublicHealthCenter WHERE health_center_id = '{$id}'");
        return response()->json((count($result) > 0 ? $result[0] : null),
            count($result) > 0 ? 200 : 404
        );

    }


    /**
     * Create a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return JsonResponse
     */
    public function create(CreateFacilityRequest $request)
    {
//        Replaced it for the Request object from Laravel
//        if ($request->isNotFilled([
//            'name',
//            'phone',
//            'address',
//            'city',
//            'province',
//            'postal_code',
//            'type',
//            'website',
//        ])) {
//            return response()->json([
//                "message" => "Missing required information! Refill the form properly"
//            ], Response::HTTP_BAD_REQUEST);
//        }
        // This takes all of the required, non-nullable values to fill, with their keys
        $parameters = collect($request->only([
            'name',
            'phone',
            'address',
            'city',
            'province',
            'postal_code',
            'type',
            'website',
        ]));

        $id = $this->doInsertAndGetId('PublicHealthCenter', $parameters);

        return response()->json(['health_center_id' => $id], $id ? Response::HTTP_CREATED : Response::HTTP_BAD_REQUEST);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return JsonResponse
     */
    public function update(Request $request, $id)
    {
        $fieldsToUpdate = collect();

        if ($request->filled('name')) {
            $fieldsToUpdate->put('name = ?', $request->name);
        }
        if ($request->filled('phone')) {
            $fieldsToUpdate->put('phone = ?', $request->phone);
        }
        if ($request->filled('address')) {
            $fieldsToUpdate->put('address = ?', $request->address);
        }
        if ($request->filled('city')) {
            $fieldsToUpdate->put('city = ?', $request->city);
        }
        if ($request->filled('province')) {
            $fieldsToUpdate->put('province = ?', $request->province);
        }
        if ($request->filled('postal_code')) {
            $fieldsToUpdate->put('postal_code = ?', $request->postal_code);
        }
        if ($request->filled('type')) {
            $fieldsToUpdate->put('type = ?', $request->type);
        }
        if ($request->filled('website')) {
            $fieldsToUpdate->put('website = ?', $request->website);
        }

        $result = $this->doUpdate('PublicHealthCenter', $id, $fieldsToUpdate);
        return response()->json(['message' => $fieldsToUpdate->count() . " field(s) updated successfully!"], 200);
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function delete($id)
    {
        $status = DB::delete("DELETE FROM PublicHealthCenter WHERE health_center_id = ?", [$id]);
        return response()->json(['status' => "Deleted successfully!"], 200);
     }

    }
