<?php

namespace App\Console\Commands;

use App\Providers\Custom;
use Illuminate\Console\Command;
use Faker;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use mysqli;

class RunCustomSeeder extends Command
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

//        $conn = new mysqli($servername, $username, $password, $dbname);


        $faker = Faker\Factory::create();

        $faker->addProvider(new Faker\Provider\en_CA\Address($faker));
        $faker->addProvider(new Faker\Provider\fr_CA\Person($faker));
        $faker->addProvider(new Custom($faker));

        /**
         * Create Health Centers
         */
        $healthCenterIds = [];
        for ($i = 1; $i < 10; $i++) {
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

            // Push available healthcenter ids here
            array_push($healthCenterIds, $center_id);
        }


        /**
         * Create GroupZones
         */
        $groupZones = [];
        for ($i = 1; $i < 10; $i++) {
            $zoneId = DB::table("group_zones")->insertGetId([
                //Health center ID
                "name" => Str::snake($faker->city),
            ]);
            // Push available healthcenter ids here
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

        for ($i = 0; $i < 20; $i++) {
            $personId = DB::table("person")->insertGetId([
                // Person ID
                "medicare" => 'abc',
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

            $person_id = array();
            $select_person_id = "SELECT person_id FROM Person";
            $result = $conn->query($select_person_id);
            if ($result) {
                while ($row = $result->fetch_assoc()) {
                    array_push($person_id, $row["person_id"]);
                }
            } else {
                echo "esti man jtanner";
            }

            $center_id = array();
            $select_center_id = "SELECT health_center_id FROM PublicHealthCenter";
            $result = $conn->query($select_center_id);
            if ($result) {
                while ($row = $result->fetch_assoc()) {
                    array_push($center_id, $row["health_center_id"]);
                }
            } else {
                echo "esti man jtanner";
            }



            DB::table("publichealthworker")->insert([
                "health_center_id" => $faker->randomElement($center_id),
                "person_id" => $faker->randomElement($person_id),
                "schedule" => $faker->type,
                "position" => $faker->position,

            ]);
        }
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

    public function createWorker($faker, $personId, $healthCenterId)
    {
        return DB::table("publichealthworker")->insertGetId([
            "health_center_id" => $healthCenterId,
            "person_id" => $personId,
            "schedule" => $faker->type,
            "position" => $faker->position,
        ]);
    }

    public function createPatient($faker, $personId)
    {
        return DB::table("patient")->insertGetId([
            "person_id" => $personId,
        ]);
    }

    public function createDiagnostics(Faker\Generator $faker, $patientId, $workers, $healthCenterIds, $amount)
    {
        for ($i = 0; $i < $amount; $i++) {
            DB::table("diagnostics")->insertGetId([
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
}
