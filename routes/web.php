<?php

use App\Models\Issdatamodel;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/welcome', function () {
    return Inertia::render('welcome', [
        'datapoints' => Issdatamodel::latest('timestamp')->take(24)->get()
    ]);
})->middleware('check.user.agent')->name('home');

Route::inertia('/faq', 'faq')->name('faq');
