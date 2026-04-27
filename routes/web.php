<?php

use App\Models\Issdatamodel;
use Carbon\Carbon;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'datapoints' => IssdataModel::where('timestamp', '>=', Carbon::today()->subDay())->get()->values(),
    ]);
})->middleware('check.user.agent')->name('home');

Route::inertia('/faq', 'faq')->name('faq');
