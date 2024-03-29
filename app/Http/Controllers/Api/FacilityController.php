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
        return response()->json(DB::select("
            SELECT
                   phc.`health_center_id`,
                   phc.`name`,
                   phc.`phone`,
                   phc.`address`,
                   phc.`type`,
                   phc.`method`,
                   COUNT(w.health_worker_id) as 'worker_amount',
                   if (phc.`drive_thru`, 'Yes','No') as 'drive_thru'
            FROM PublicHealthCenter phc
            LEFT JOIN PublicHealthWorker w ON w.health_center_id = phc.health_center_id
            GROUP BY phc.health_center_id"));
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
                `health_center_id`, `name`, c.`city`, p.`province`,
                `postal_code`, `website`, `phone`, `address`, `type`, `method`, `drive_thru`
            FROM PublicHealthCenter phc
            JOIN PostalCode pc ON phc.postal_code_id = pc.postal_code_id
            JOIN City c ON pc.city_id = c.city_id
            JOIN Region r ON c.region_id = r.region_id
            JOIN Province p ON p.province_code = r.province_code
            WHERE health_center_id = '{$id}'");
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

        $parameters = collect($request->only([
            'name',
            'phone',
            'address',
            'postal_code',
            'postal_code_id',
            'type',
            'website',
            'method',
            'drive_thru'
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
        if ($request->filled('postal_code_id')) {
            $fieldsToUpdate->put('postal_code = ?', $request->postal_code_id);
        }
        if ($request->filled('type')) {
            $fieldsToUpdate->put('type = ?', $request->type);
        }
        if ($request->filled('website')) {
            $fieldsToUpdate->put('website = ?', $request->website);
        }

        $result = $this->doUpdate('PublicHealthCenter', 'health_center_id', $id, $fieldsToUpdate);
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
