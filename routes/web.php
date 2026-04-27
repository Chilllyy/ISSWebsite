<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')
->middleware('check.user.agent')->name('home');

Route::inertia('/faq', 'faq')->name('faq');
