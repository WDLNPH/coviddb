<?php

<<<<<<< HEAD
namespace Faker\Provider\en_CA;


=======
namespace App\Providers;


use Carbon\Carbon;

>>>>>>> 44a5caef88d2bc72e9b10627df717e188c174a1c
class Custom extends \Faker\Provider\DateTime
{
    protected static $medicare = ['???? #### ####'];
    protected static $letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    protected static $hcPosition = ['Janitor', 'Doctor', 'Nurse', 'Psycho', 'Intern'];
    protected static $hcType = ['Hospital', 'Clinic', 'Special Installment'];
    protected static $schedule;

<<<<<<< HEAD





    public static function schedule_builder()
    {
        $schedule = time('H:00:00-H:00:00');
=======
    public static function schedule_builder()
    {
        $schedule = Carbon::now()->format('H:00:00-H:00:00');
>>>>>>> 44a5caef88d2bc72e9b10627df717e188c174a1c
        return static::toUpper($schedule);
    }


    public static function randomMedicareLetter()
    {
        return static::randomElement(static::$letter);
    }
    public static function medicare()
    {
        $string = static::randomElement(static::$medicare);

        $string = preg_replace_callback('/\#/u', 'static::randomDigit', $string);
        $string = preg_replace_callback('/\?/u', 'static::randomMedicareLetter', $string);

        return static::toUpper($string);
    }

    public static function position()
    {
        $string = static::randomElement(static::$hcPosition);
        return static::toUpper($string);
    }
    public static function type()
    {
        $string = static::randomElement(static::$hcType);
        return static::toUpper($string);
    }
}
