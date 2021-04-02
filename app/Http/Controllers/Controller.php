<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\DB;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * @param null $query
     * @param null $description
     * @return \Illuminate\Http\JsonResponse
     */
    protected function getDefaultResponse($query = null, $description = null)
    {
        $result = DB::select($query);
        $columns = [];
        if (count($result) > 0) {
            $columns = array_keys(json_decode(json_encode($result[0]), true));
        }
        return response()->json([
            'description' => $description,
            'query' => $query,
            'columns' => $columns,
            'result' => $result
        ]);
    }
}
