<?php

namespace App\Console\Commands;

use App\Providers\Custom;
use Illuminate\Console\Command;
use Faker;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class test extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'run:test';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    const GROUP_ZONES = [
        ['MontrealPrimaryGrade1_Group_1', 'Education'],
        ['MontrealPrimaryGrade1_Group_2', 'Education'],
        ['MontrealChurch_Group_1', 'House Of Worship'],
        ['MontrealChurch_Group_2', 'House Of Worship'],
        ['Basketball_Group_1', 'Sports'],
        ['WeightLifting_Group_1', 'Sports'],
        ['Soccer_Group_1', 'Sports'],
        ['SainteCatherineRetail_Group_1', 'Shopping'],
        ['QuartierDixTrente_Group_1', 'Shopping'],
        ['Rockland_Group_1', 'Shopping'],
    ];

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
<<<<<<< HEAD
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "coviddb";
=======
>>>>>>> 44a5caef88d2bc72e9b10627df717e188c174a1c

        $faker = Faker\Factory::create();

        $faker->addProvider(new Faker\Provider\en_CA\Address($faker));
        $faker->addProvider(new Faker\Provider\fr_CA\Person($faker));
<<<<<<< HEAD
        $faker->addProvider(new Faker\Provider\en_CA\Custom($faker));

        $healthCenterIds = [];
        $healthWorkerIds = [];
        $patient_ids = [];

        for ($i = 0; $i < 10; $i++) {

            for ($j = 0; $j < 10; $j++) {
            $personId = $this->createPerson($faker);
            }

            $center_id = DB::table("publichealthcenter")->insertGetId([
=======
        // Saving Custom under the right namespace
        $faker->addProvider(new Custom($faker));

        $healthCenterIds = [];
        $healthWorkerIds = [];
        // Same naming convention
        $patientIds = [];

        /**
         * Create Health Centers
         */
        for ($i = 1; $i < 10; $i++) {
            $centerId = DB::table("publichealthcenter")->insertGetId([
>>>>>>> 44a5caef88d2bc72e9b10627df717e188c174a1c
                //Health center ID
                "name" => $faker->company,
                "phone" => $faker->phoneNumber,
                "address" => $faker->streetAddress,
                "city" => $faker->city,
                "province" => $faker->provinceAbbr,
                "postal_code" => $faker->postcode,
                "type" => $faker->type,
                "website" => $faker->url,
            ]);
<<<<<<< HEAD
            array_push($healthCenterIds, $center_id);

            $patient_id = DB::table("patient")->insertGetId([
                "health_center_id" => $healthCenterIds[array_rand($healthCenterIds)],
                "person_id" => $personId,
            ]);
            
            
            array_push($patient_ids, $patient_id);
            
            
            
            $healthWorkerId = DB::table("publichealthworker")->insertGetId([
                "health_center_id" => $healthCenterIds[array_rand($healthCenterIds)],
                "person_id" => $personId,
                "position" => $faker->position,
                "schedule" => $faker->schedule_builder,
            ]);
            
            
            array_push($healthWorkerIds, $healthWorkerId);


            
           $this->createWorker($faker, $healthCenterIds[array_rand($healthCenterIds)]);
            
           
           $this->createDiagnostics($faker, $healthCenterIds[array_rand($healthCenterIds)], $patient_ids[array_rand($patient_ids)], $healthWorkerIds[array_rand($healthWorkerIds)]);
        }
 

        // for ($i = 0; $i < 10; $i++) {
        // Patient Id
        //      $this->createPatient($faker, $healthCenterIds[array_rand($healthCenterIds)]);
        //  }



=======

            // Push available healthcenter ids here
            array_push($healthCenterIds, $centerId);
            // And we close here, no need to continue
        }

        /**
         * Create GroupZones
         */
        $groupZones = [];
        foreach (self::GROUP_ZONES as $groupZone) {
            $zoneId = DB::table("groupzone")->insertGetId([
                "name" => $groupZone[0],
                "activity" => $groupZone[1]
            ]);
            // Push available group zone ids here
            array_push($groupZones, $zoneId);
        }

        /**
         * Create Health Workers
         */
        $workers = [];
        for ($i = 0; $i < 10; $i++) {
            $personId = $this->createPerson($faker);
            $workerId = $this->createWorker($faker, $personId, $healthCenterIds[array_rand($healthCenterIds)]);
            array_push($workers, $workerId);
        }

        /**
         * Create Patients
         */
        for ($i = 0; $i < 10; $i++) {
            $personId = $this->createPerson($faker);
            $this->giveGroupZones($personId, rand(1, 3), $groupZones);
            $patientId = $this->createPatient($faker, $personId);

            $this->createDiagnostics($faker, $patientId, $workers, $healthCenterIds, rand(1,3));
        }
        die;

        $patient_id = DB::table("patient")->insertGetId([
            "health_center_id" => $healthCenterIds[array_rand($healthCenterIds)],
            "person_id" => $personId,
        ]);


        array_push($patient_ids, $patient_id);



        $healthWorkerId = DB::table("publichealthworker")->insertGetId([
            "health_center_id" => $healthCenterIds[array_rand($healthCenterIds)],
            "person_id" => $personId,
            "position" => $faker->position,
            "schedule" => $faker->schedule_builder,
        ]);


        array_push($healthWorkerIds, $healthWorkerId);



       $this->createWorker($faker, $healthCenterIds[array_rand($healthCenterIds)]);


       $this->createDiagnostics($faker, $healthCenterIds[array_rand($healthCenterIds)], $patient_ids[array_rand($patient_ids)], $healthWorkerIds[array_rand($healthWorkerIds)]);


>>>>>>> 44a5caef88d2bc72e9b10627df717e188c174a1c
        die;

    }

    public function createPerson($faker)
    {
        return DB::table("person")->insertGetId([
            // Person ID
            "medicare" => $faker->medicare,
            "first_name" => $faker->firstName,
            "last_name" => $faker->lastName,
            "address" => $faker->streetAddress,
            "city"   => $faker->city,
            "postal_code" => $faker->postcode,
            "province" => $faker->provinceAbbr,
            "citizenship" => $faker->countryCode,
            "email"   => $faker->email,
            "phone" => $faker->phoneNumber,
            "dob" =>  $faker->date(),
        ]);
    }

<<<<<<< HEAD

    public function createWorker($faker, $healthCenterId)
    {
        $personId = $this->createPerson($faker);


=======
    public function createWorker($faker, $personId, $healthCenterId)
    {
>>>>>>> 44a5caef88d2bc72e9b10627df717e188c174a1c
        return DB::table("publichealthworker")->insertGetId([
            "health_center_id" => $healthCenterId,
            "person_id" => $personId,
            "schedule" => $faker->schedule_builder,
            "position" => $faker->position,
        ]);
    }

<<<<<<< HEAD

    public function createDiagnostics($faker, $healthCenterId, $patient_id, $healthWorkerId)
    {


        return DB::table("diagnostic")->insertGetId([
            //diagnotic_id AUTO
            "health_center_id" => $healthCenterId,
            "patient_id" => $patient_id,
            "diagnostic_date" =>  $faker->dateTimeBetween('-1 year', '+1 week'),
            "result" => $faker->boolean(50),
            "health_worker_id" => $healthWorkerId


        ]);
    }









=======
    public function createPatient($faker, $personId)
    {
        return DB::table("patient")->insertGetId([
            "person_id" => $personId,
        ]);
    }

    public function createDiagnostics(Faker\Generator $faker, $patientId, $workers, $healthCenterIds, $amount)
    {
        for ($i = 0; $i < $amount; $i++) {
            DB::table("diagnostic")->insertGetId([
                "health_worker_id" => $workers[array_rand($workers)],
                "health_center_id" => $healthCenterIds[array_rand($healthCenterIds)],
                "patient_id" => $patientId,
                "diagnostic_date" => $faker->dateTimeBetween('-1 years'),
                "result" => $faker->boolean,
            ]);
        }
    }

    public function giveGroupZones($personId, $amount, $groupZones) {
        for ($i = 0; $i < $amount; $i++) {
            DB::table("groupzonepersonpivot")->insert([
                'person_id' => $personId,
                'group_id' => $groupZones[array_rand($groupZones)]
            ]);
        }
    }
>>>>>>> 44a5caef88d2bc72e9b10627df717e188c174a1c
}
