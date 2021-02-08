<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Faker;
use Illuminate\Support\Facades\DB;

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
        $faker = Faker\Factory::create();
        $faker->addProvider(new Faker\Provider\en_CA\Address($faker));
        $faker->addProvider(new Faker\Provider\fr_CA\Person($faker));
        $faker->addProvider(new Faker\Provider\en_CA\Custom($faker));
        for ($i = 0; $i < 20; $i++) {
            DB::table("person")->insert([
                // Person ID
                "medicare" => $faker-> medicare,            
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
            DB::table("publichealthworker")->insert([
                
                //"health_worker_id" => $faker->relation('person', 'id'),
                // `schedule` => dates of work?
                "position" => $faker->firstNameMale, // this breaks
           ]);
        }
    }
}
