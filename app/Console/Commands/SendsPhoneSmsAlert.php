<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use DB;
use Twilio\Rest\Client;

class SendsPhoneSmsAlert extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'alerts:send';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sends Notifications that have yet to be sent';

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
        // Fetch all unsent notifications
        $results = DB::select("SELECT
            m.msg_id,
            m.message,
            p.phone
        FROM Messages m
        JOIN Person p ON p.person_id = m.person_id
                    WHERE is_sent = 0");

        $updateMsgs = collect();
        foreach ($results as $result) {
            if (in_array($result->phone, explode(',', env('TWILIO_ALLOWED_PHONES')))) {
                // Send it to the user here
                $this->line("Sending to {$result->phone}");
                $client = new Client(
                    env('TWILIO_ACCOUNT_SID'),
                    env('TWILIO_AUTH_TOKEN')
                );
                $client->messages->create($result->phone, [
                    "body" => $result->message,
                    "from" => env("TWILIO_PHONE_NUMBER"),
                ]);
            }
            $updateMsgs->add($result->msg_id);
        }
        $stringUpdate = $updateMsgs->join(',');
        DB::update("UPDATE Messages SET is_sent=1 WHERE msg_id IN ($stringUpdate)");

        $this->line("Successfully Sent " . $updateMsgs->count() . " messages.");
        return 0;
    }
}
