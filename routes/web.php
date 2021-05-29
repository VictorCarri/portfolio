<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* Homepage with React */
Route::view("/{path?}", "web.homepage") // Shortcut - return the homepage view from the root URL
	->where("path", ".*") // Redirect all paths
	->name("homepage"); // Name the route for later use
