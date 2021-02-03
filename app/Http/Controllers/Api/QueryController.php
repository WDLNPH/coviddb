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
        return $this->getDefaultResponse();
    }

    /**
     * ii. Get details (first-name, last-name, date of birth, email, phone, city)
     * of all the people who tested positive for the COVID-19 on January 10 , 2021
     */
    public function caseTwo() {
        return $this->getDefaultResponse();
    }

    /**
     * iii. Give details of the diagnosis of the people who live at 95 Robert St.
     * (first- name, last-name, date of birth, email, phone, date of diagnosis, test result,
     * Include the history of the diagnosis if a person have been tested more than once).
     */
    public function caseThree() {
        return $this->getDefaultResponse();
    }

    /**
     * iv. Provide a list of all the people who live with Roger Macdonald (
     * first- name, last-name, date of birth, email, phone).
     */
    public function caseFour() {
        return $this->getDefaultResponse();
    }

    /**
     * v. Provide a list of all the people who are members of the same GroupZones of Roger Macdonald
     * (If he is a member of more than on GroupZone, give the name of each GroupZone and the list
     * of people in that specific GroupZone).
     */
    public function caseFive() {
        return $this->getDefaultResponse();
    }

    /**
     * vi. Get details of all Public Health Workers who work in Viau Public Health Center
     *  (first-name, last-name, date of birth, email, phone, city).
     */
    public function caseSix() {
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
