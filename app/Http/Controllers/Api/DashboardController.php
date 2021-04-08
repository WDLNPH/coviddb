<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    //
    public function getUserStats()
    {
        dd(auth()->user());
        return response()->json(DB::select("SELECT `health_center_id`, `name`, `phone`, `address`, `type` FROM PublicHealthCenter"));
    }
}
