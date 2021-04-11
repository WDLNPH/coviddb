<?php

namespace App\Models;

use App\Models\Person\Administrator;
use App\Models\Person\Patient;
use App\Models\Person\PublicHealthWorker;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Person extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $table = 'Person';

    protected $primaryKey = 'person_id';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $appends = [
        'role'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function worker()
    {
        return $this->hasOne(PublicHealthWorker::class, 'person_id', 'person_id');
    }

    public function patient()
    {
        return $this->hasOne(Patient::class, 'person_id', 'person_id');
    }

    public function administrator()
    {
        return $this->hasOne(Administrator::class, 'person_id', 'person_id');
    }

    public function getRoleAttribute()
    {
        if ($this->administrator()->exists()) {
            return 'administrator';
        } else if ($this->worker()->exists()) {
            return 'worker';
        } else if ($this->patient()->exists()) {
            return 'patient';
        }
        return 'person';
    }
}
