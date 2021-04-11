<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;

class DashboardController extends Controller
{
    //
    public function getUserStats(Request $request)
    {
        $id = auth()->user()->person_id;
        $result = DB::select("
            SELECT
                p.`person_id`,
                c.`city`,
                r.region_name,
                al.alert_info,
                al.alert_color,
                (SELECT count(diagnostic_id)
                    FROM Diagnostic d
                    JOIN
                        Patient pt ON d.patient_id = pt.patient_id
                    JOIN
                        Person ps ON ps.person_id = pt.person_id
                    WHERE
                        ps.person_id = '{$id}'
                    AND d.`result` = 1
                    AND d.`diagnostic_date` >= NOW() - INTERVAL 2 WEEK
                ) as recently_tested_positive,
                (SELECT JSON_ARRAYAGG(
                   JSON_OBJECT(
                       'date', d.diagnostic_date,
                       'result', if(d.`result`, true, false)
                   )
                ) FROM Diagnostic d
                    JOIN
                        Patient pt ON d.patient_id = pt.patient_id
                    JOIN
                        Person ps ON ps.person_id = pt.person_id
                    WHERE
                        ps.person_id = '{$id}'
                ) as 'diagnostics_taken',
               (SELECT JSON_ARRAYAGG(
                   JSON_OBJECT(
                       'date', d.diagnostic_date,
                       'patient_name', CONCAT(ptp.first_name, ' ', ptp.last_name),
                       'result', if(d.`result`, true, false)
                   )
                ) FROM Diagnostic d
                    JOIN
                        Patient pt ON d.patient_id = pt.patient_id
                    JOIN
                        Person ptp ON pt.person_id = ptp.person_id
                    JOIN
                        PublicHealthWorker w ON d.health_worker_id = w.health_worker_id
                    JOIN
                        Person ps ON w.person_id = ps.person_id
                    WHERE
                        ps.person_id = '{$id}'
                ) as 'diagnostics_handled',
                MAX(d.diagnostic_date) as 'last_diagnostic_date'
                FROM
                     Person p
                LEFT JOIN
                    Administrator a ON a.person_id = p.person_id
                LEFT JOIN
                    Patient pt ON pt.person_id = p.person_id
                LEFT JOIN
                    PublicHealthWorker w ON w.person_id = p.person_id
                LEFT JOIN
                    Diagnostic d ON d.patient_id = pt.patient_id
                JOIN
                    PostalCode pc ON p.postal_code_id = pc.postal_code_id
                JOIN
                    City c ON pc.city_id = c.city_id
                JOIN
                    Region r ON c.region_id = r.region_id
                JOIN
                    Alert al ON r.alert_id = al.alert_id
                WHERE p.person_id = '{$id}'
                GROUP BY
                    p.person_id");
        if (count($result) > 0) {
            $result[0]->diagnostics_taken = json_decode($result[0]->diagnostics_taken, true) ?? [];
            $result[0]->diagnostics_handled = json_decode($result[0]->diagnostics_handled, true) ?? [];
            return response()->json($result[0]);
        }
    }
}
