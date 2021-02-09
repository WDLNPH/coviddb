<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Faker;
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

        $conn = new mysqli($servername, $username, $password, $dbname);


        $faker = Faker\Factory::create();

        $faker->addProvider(new Faker\Provider\en_CA\Address($faker));
        $faker->addProvider(new Faker\Provider\fr_CA\Person($faker));
        $faker->addProvider(new Faker\Provider\en_CA\Custom($faker));
        for ($i = 0; $i < 20; $i++) {
            DB::table("person")->insert([
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

            DB::table("publichealthcenter")->insert([
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
}
