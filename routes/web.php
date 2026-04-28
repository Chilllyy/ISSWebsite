<?php

use App\Models\Issdatamodel;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'datapoints' => Issdatamodel::selectRaw("DATE_FORMAT(`timestamp`, '%Y-%m-%d %H:%i:%00') AS bucket,
        AVG(value) AS value")->where('timestamp', '>=', now()->subDay())
        ->groupBy('bucket')
        ->orderBy('bucket')
        ->get()
    ]);
})->middleware('check.user.agent')->name('home');

Route::inertia('/faq', 'faq')->name('faq');
