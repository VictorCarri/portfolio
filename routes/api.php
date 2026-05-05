<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SendContactForm; // Controller that sends our contact form
use App\Http\Controllers\GetWOFData; // The controller that fetches WOF data for my display page
use Illuminate\Support\Facades\Log;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Log::debug("Registering API routes");
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post("/sendMail", SendContactForm::class)->name("sendEmail"); // Sends an e-mail using the contact form
Route::get("/wofData", GetWOFData::class)->name("getWOFData");
