<?php

namespace App\Models\Person;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class PublicHealthWorker extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $table = 'PublicHealthWorker';

    protected $primaryKey = 'health_worker_id';
}
