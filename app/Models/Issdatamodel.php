<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Issdatamodel extends Model
{
    protected $fillable = ['timestamp', 'value'];
    /** @use HasFactory<\Database\Factories\IssdatamodelFactory> */
    use HasFactory;
}
