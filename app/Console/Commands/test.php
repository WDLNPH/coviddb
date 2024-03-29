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

    const POSITIONS = [
        'Intern',
        'Nurse',
        'Director'
    ];

    const SYMPTOMS = [
        'Fever',
        'Cough',
        'Shortness of Breath',
        'loss of taste or smell',
        'nausea',
        'stomach ache',
        'vomiting',
        'headache',
        'muscle pain',
        'diarrhea',
        'sore throat',
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

        $faker = Faker\Factory::create();

        $faker->addProvider(new Faker\Provider\en_CA\Address($faker));
        $faker->addProvider(new Faker\Provider\fr_CA\Person($faker));
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
            $postalCode =  $faker->postal_code_qc;
            $centerId = DB::table("PublicHealthCenter")->insertGetId([
                //Health center ID
                "name" => $faker->company,
                "phone" => $faker->phoneNumber,
                "address" => $faker->streetAddress,
                "postal_code" => $postalCode,
                "postal_code_id" => Str::substr($postalCode, 0, 3),
                "method" => $faker->word,
                "drive_thru" => $faker->boolean,
                "type" => $faker->type,
                "website" => $faker->url,
            ]);

            // Push available healthcenter ids here
            array_push($healthCenterIds, $centerId);
            // And we close here, no need to continue
        }

        /**
         * Create GroupZones
         */
        $groupZones = [];
        foreach (self::GROUP_ZONES as $groupZone) {
            $zoneId = DB::table("GroupZone")->insertGetId([
                "name" => $groupZone[0],
                "activity" => $groupZone[1]
            ]);
            // Push available group zone ids here
            array_push($groupZones, $zoneId);
        }

        /**
         * Create Positions
         */
        $positions = [];
        foreach (self::POSITIONS as $position) {
            $positionId = DB::table("Position")->insertGetId([
                "position" => $position
            ]);
            // Push available group zone ids here
            array_push($positions, $positionId);
        }

        /**
         * Create Symptoms
         */
        $symptoms = [];
        foreach (self::SYMPTOMS as $symptom) {
            $symptomId = DB::table("Symptom")->insertGetId([
                "symptom" => $symptom
            ]);
            // Push available group zone ids here
            array_push($symptoms, $symptomId);
        }
        /**
         * Create Health Workers
         */
        $workers = [];
        for ($i = 0; $i < 10; $i++) {
            $personId = $this->createPerson($faker);
            $workerId = $this->createWorker($faker,
                $personId,
                $healthCenterIds[array_rand($healthCenterIds)],
                $positions[array_rand($positions)]
            );
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
    }

    public function createPerson(Faker\Generator $faker)
    {
        $date = $faker->date();
        $postalCode = $faker->postal_code_qc;
        return DB::table("Person")->insertGetId([
            // Person ID
            "medicare" => $faker->medicare,
            "password" => bcrypt(str_replace('-', '', $date)),
            "api_token" => Str::random(60),
            "first_name" => $faker->firstName,
            "last_name" => $faker->lastName,
            "address" => $faker->streetAddress,
            "postal_code" => $postalCode,
            "postal_code_id" => Str::substr($postalCode, 0, 3),
            "citizenship" => $faker->countryCode,
            "email"   => $faker->email,
            "phone" => $faker->phoneNumber,
            "dob" => $date
        ]);
    }

    public function createWorker($faker, $personId, $healthCenterId, $positionId)
    {
        return DB::table("PublicHealthWorker")->insertGetId([
            "health_center_id" => $healthCenterId,
            "person_id" => $personId,
            "schedule" => $faker->schedule_builder,
            "position_id" => $positionId,
        ]);
    }

    public function createPatient($faker, $personId)
    {
        return DB::table("Patient")->insertGetId([
            "person_id" => $personId,
        ]);
    }

    public function createDiagnostics(Faker\Generator $faker, $patientId, $workers, $healthCenterIds, $amount)
    {
        for ($i = 0; $i < $amount; $i++) {
            DB::table("Diagnostic")->insertGetId([
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
            DB::table("GroupZonePersonPivot")->insert([
                'person_id' => $personId,
                'group_id' => $groupZones[array_rand($groupZones)]
            ]);
        }
    }
}
