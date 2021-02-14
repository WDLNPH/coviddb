<?php

namespace App\Providers;


use Carbon\Carbon;
class Custom extends \Faker\Provider\DateTime
{
    protected static $medicare = ['???? #### ####'];
    protected static $letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    protected static $hcPosition = ['Janitor', 'Doctor', 'Nurse', 'Psycho', 'Intern'];
    protected static $hcType = ['Hospital', 'Clinic', 'Special Installment'];



    //generates time 24hr within specified format
    public static function schedule_timer()
    {
        $time = now()->setHour(rand(0,23));           
        return $time->format('H:00') . '-' . $time->addHours(8)->format('H:00');
    }

    //builds fake weekly schedule
    public static function schedule_builder()
    {     
        $sched = "Mon: " . self::schedule_timer() . ", Tue: " . self::schedule_timer() . ", Wed: " . self::schedule_timer() . ", Thu: " . self::schedule_timer() 
        . ", Fri: " . self::schedule_timer() . ", Sat: " . self::schedule_timer() . ", Sun: " . self::schedule_timer();         
        return $sched;
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
