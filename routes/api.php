<?php

use App\Models\Issdatamodel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/value', function (Request $request) {
    $value = Issdatamodel::latest('timestamp')->first()->value ?? 0;
    return response()->json([
        'value' => $value,
    ]);
})->name('api.value');