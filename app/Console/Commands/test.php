<?php

namespace App\Console\Commands;

use App\Providers\Custom;
use Illuminate\Console\Command;
use Faker;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use mysqli;

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
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "coviddb";

        $faker = Faker\Factory::create();

        $faker->addProvider(new Faker\Provider\en_CA\Address($faker));
        $faker->addProvider(new Faker\Provider\fr_CA\Person($faker));
        $faker->addProvider(new Faker\Provider\en_CA\Custom($faker));

        $healthCenterIds = [];
        $healthWorkerIds = [];
        $patient_ids = [];

        for ($i = 0; $i < 10; $i++) {

            for ($j = 0; $j < 10; $j++) {
            $personId = $this->createPerson($faker);
            }

            $center_id = DB::table("publichealthcenter")->insertGetId([
                //Health center ID
                "name"      => $faker->company,
                "phone"     => $faker->phoneNumber,
                "address" => $faker->streetAddress,
                "city" => $faker->city,
                "province" => $faker->provinceAbbr,
                "postal_code" => $faker->postcode,
                "type"       => $faker->type,
                "website"  => $faker->url,
            ]);
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


    public function createWorker($faker, $healthCenterId)
    {
        $personId = $this->createPerson($faker);


        return DB::table("publichealthworker")->insertGetId([
            "health_center_id" => $healthCenterId,
            "person_id" => $personId,
            "schedule" => $faker->schedule_builder,
            "position" => $faker->position,
        ]);
    }


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









}
