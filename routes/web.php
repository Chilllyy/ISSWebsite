<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home')
->middleware('check.user.agent');
