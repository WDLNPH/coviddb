<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class QueryController extends Controller
{
    /**
     * i. Get details of all the people who are associated with a
     * GroupZone MontrealPrimaryGrade1_Group_1
     * (first-name, last-name, date of birth, email, phone, city).
     */
    public function caseOne() {
        $query = "SELECT
                p.first_name,
                p.last_name,
                p.dob,
                p.email,
                p.phone,
                p.city
            FROM Person p
            JOIN GroupZonePersonPivot gzp
                ON p.person_id = gzp.person_id
            JOIN GroupZone gz
                ON gz.group_id = gzp.group_id
            WHERE
                gz.name = 'MontrealPrimaryGrade1_Group_1'";
        return $this->getDefaultResponse();
    }

    /**
     * ii. Get details (first-name, last-name, date of birth, email, phone, city)
     * of all the people who tested positive for the COVID-19 on January 10 , 2021
     */
    public function caseTwo() {
        $query = "SELECT
                p.first_name,
                p.last_name,
                p.dob,
                p.email,
                p.phone,
                p.city
            FROM Person p
            JOIN Patient pt
                ON p.person_id = pt.person_id
            JOIN Diagnostic d
                ON pt.patient_id = d.patient_id
            WHERE
                d.result = TRUE
                AND d.diagnostic_date BETWEEN '2021-01-10 00:00:00'
                    AND '2021-01-10 23:59:59'";
        return $this->getDefaultResponse();
    }

    /**
     * iii. Give details of the diagnosis of the people who live at 95 Robert St.
     * (first- name, last-name, date of birth, email, phone, date of diagnosis, test result,
     * Include the history of the diagnosis if a person have been tested more than once).
     */
    public function caseThree() {
        $query = "SELECT
                p.first_name,
                p.last_name,
                p.dob,
                p.email,
                p.phone,
                MAX(d.diagnostic_date), # TODO: Last Diagnostic Date
                GROUP_CONCAT(d.result) # TODO: History of diagnosis
            FROM Diagnostic d
            JOIN Patient pt
                ON pt.patient_id = d.patient_id
            JOIN Person p
                ON p.person_id = pt.person_id
            WHERE
                p.address = '95 Robert St.'
            GROUP BY p.patient_id";
        return $this->getDefaultResponse();
    }

    /**
     * iv. Provide a list of all the people who live with Roger Macdonald (
     * first- name, last-name, date of birth, email, phone).
     */
    public function caseFour() {
        $query = "SELECT
                p.first_name,
                p.last_name,
                p.dob,
                p.email,
                p.phone
            FROM Person p
            WHERE
                p.address = (
                    SELECT
                       address
                    FROM Person
                        WHERE first_name = 'Roger'
                        AND last_name = 'Macdonald'
                )";

        return $this->getDefaultResponse();
    }

    /**
     * v. Provide a list of all the people who are members of the same GroupZones of Roger Macdonald
     * (If he is a member of more than on GroupZone, give the name of each GroupZone and the list
     * of people in that specific GroupZone).
     */
    public function caseFive() {
        $query = "SELECT
                p.first_name,
                p.last_name,
                p.dob,
                p.email,
                p.phone,
                p.city
            FROM Person p
            JOIN GroupZonePersonPivot gzp
                ON p.person_id = gzp.person_id
            WHERE
                gzp.group_id IN (
                    SELECT
                        gzp.group_id
                    FROM GroupZonePersonPivot gzp
                    JOIN Person p
                        ON p.person_id = gzp.person_id
                    WHERE p.first_name = 'Roger'
                    AND p.last_name = 'Macdonald'
                )";

        return $this->getDefaultResponse();
    }

    /**
     * vi. Get details of all Public Health Workers who work in Viau Public Health Center
     *  (first-name, last-name, date of birth, email, phone, city).
     */
    public function caseSix() {
        $query = "SELECT
                p.first_name,
                p.last_name,
                p.dob,
                p.email,
                p.phone,
                p.city
            FROM Person p
            JOIN Employee e
                ON p.person_id = e.person_id
            JOIN Facility f
                ON f.facility_id = e.facility_id
            WHERE f.facility_name = 'Viau'";
        return $this->getDefaultResponse();
    }

    private function getDefaultResponse()
    {
        return response()->json([
            'query' => 'SELECT * FROM some_table WHERE condition = value;',
            'result' => [
                ['field1' => 'value1', 'field2' => 'value2']
            ]
        ]);
    }
}
