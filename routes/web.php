<?php

use App\Models\Issdatamodel;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'datapoints' => IssdataModel::where('timestamp', '>=', now()->subDay())->orderBy('timestamp', 'asc')->get()
    ]);
})->middleware('check.user.agent')->name('home');

Route::inertia('/faq', 'faq')->name('faq');
