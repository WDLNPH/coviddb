<?php

namespace App\Providers;


use Carbon\Carbon;
class Custom extends \Faker\Provider\DateTime
{
    protected static $medicare = ['????########'];
    protected static $letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    protected static $hcPosition = ['Janitor', 'Doctor', 'Nurse', 'Psycho', 'Intern'];
    protected static $hcType = ['Hospital', 'Clinic', 'Special Installment'];

    const POSTAL_CODE_QC = [
        'G4W','G5H','G5J','G5L','G5M','G5N','G5R','G7P','G8B','G8C','G8E','G8H','G8J','G8K','G8L','G8M','G8N','G0A','G1A','G1J',
        'G1K','G1L','G1M','G1N','G1P','G1R','G1S','G1T','G2C','G2E','G2J','G2K','G3B','G3C','G3H','G3M','G3N','G3Z','G4A','G5A',
        'G0X','G9X','J5V','J0B','J1S','J1T','J1X','H1B','H1G','H1H','H2Y','H2Z','H3A','H3B','H3G','H3H','H3X','H3Y','H3Z','H4W',
        'H4X','H9J','H9P','H9R','H9W','J0X','J8N','J9B','J9E','J0Z','J9P','J9T','J9V','J9Z','G0G','G4S','G5B','G8P','G4X','G5V',
        'G5X','G5Y','G5Z','G6A','G6E','G6G','G6V','G6W','G6Y','H7N','H7R','J0K','J5M','J5T','J5X','J5Y','J5Z','J6A','J6V','J6W',
        'J6X','J6Y','J7K','J7L','J0T','J5K','J5L','J7E','J7P','J7R','J7Y','J7Z','J8A','J8B','J8E','J8H','J9L','J0J','J0L','J0S',
        'J2G','J2H','J2J','J2K','J2L','J2M','J2N','J2R','J2S','J2T','J2X','J2Y','J3A','J3B','J3E','J3G','J3L','J3M','J3X','J4B',
        'J4P','J4R','J4S','J4W','J4X','J4Y','J4Z','J5A','J5B','J5C','J5R','J6J','J6K','J6N','J6R','J6S','J6T','J7V','G0P','G0Z',
        'G6L','G6P','G6T','J0A','J0C','J2A','J2C','J2E','J3T','G0B','G0C','G0E','G0H','G0J','G0K','G0L','G0M','G0N','G0R','G0S',
        'G0T','G0V','G0W','G0Y','G1B','G1C','G1E','G1G','G1H','G1V','G1W','G1X','G1Y','G2A','G2B','G2G','G2L','G2M','G2N','G3A',
        'G3E','G3G','G3J','G3K','G3L','G4R','G4T','G4V','G4Z','G5C','G5T','G6B','G6C','G6H','G6J','G6K','G6R','G6S','G6X','G6Z',
        'G7A','G7B','G7G','G7H','G7J','G7K','G7N','G7S','G7T','G7X','G7Y','G7Z','G8A','G8G','G8T','G8V','G8W','G8Y','G8Z','G9A',
        'G9B','G9C','G9H','G9N','G9P','G9R','G9T','H0H','H0M','H1A','H1C','H1E','H1J','H1K','H1L','H1M','H1N','H1P','H1R','H1S',
        'H1T','H1V','H1W','H1X','H1Y','H1Z','H2A','H2B','H2C','H2E','H2G','H2H','H2J','H2K','H2L','H2M','H2N','H2P','H2R','H2S',
        'H2T','H2V','H2W','H2X','H3C','H3E','H3J','H3K','H3L','H3M','H3N','H3P','H3R','H3S','H3T','H3V','H3W','H4A','H4B','H4C',
        'H4E','H4G','H4H','H4J','H4K','H4L','H4M','H4N','H4P','H4R','H4S','H4T','H4V','H4Y','H4Z','H5A','H5B','H7A','H7B','H7C',
        'H7E','H7G','H7H','H7J','H7K','H7L','H7M','H7P','H7S','H7T','H7V','H7W','H7X','H7Y','H8N','H8P','H8R','H8S','H8T','H8Y',
        'H8Z','H9A','H9B','H9C','H9E','H9G','H9H','H9K','H9S','H9X','J0E','J0G','J0H','J0M','J0N','J0P','J0R','J0V','J0W','J0Y',
        'J1A','J1C','J1E','J1G','J1H','J1J','J1K','J1L','J1M','J1N','J1R','J1Z','J2B','J2W','J3H','J3N','J3P','J3R','J3V','J3Y',
        'J3Z','J4G','J4H','J4J','J4K','J4L','J4M','J4N','J4T','J4V','J5J','J5W','J6E','J6Z','J7A','J7B','J7C','J7G','J7H','J7J',
        'J7M','J7N','J7T','J7W','J7X','J8C','J8G','J8L','J8M','J8P','J8R','J8T','J8V','J8X','J8Y','J8Z','J9A','J9H','J9J','J9X',
        'J9Y'
    ];

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

    public static function randomQcPostalCodePrefix()
    {
        return static::randomElement(self::POSTAL_CODE_QC);
    }

    public static function postal_code_qc()
    {
        return static::randomQcPostalCodePrefix() . ' ' . static::randomDigit().strtoupper(static::randomLetter()).static::randomDigit();
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
