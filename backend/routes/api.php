<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\HistoryController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Auth routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

// Product routes
Route::get('/products', [ProductController::class, 'index'])->middleware('auth:sanctum');
Route::post('/products', [ProductController::class, 'store'])->middleware('auth:sanctum');
Route::get('/products/{id}', [ProductController::class, 'show'])->middleware('auth:sanctum');
Route::put('/products/{id}', [ProductController::class, 'update'])->middleware('auth:sanctum');
Route::delete('/products/{id}', [ProductController::class, 'delete'])->middleware('auth:sanctum');

// History routes
Route::get('/history', [HistoryController::class, 'index'])->middleware('auth:sanctum');
Route::post('/stock', [HistoryController::class, 'updateStock'])->middleware('auth:sanctum');
Route::get('/history/{id}', [HistoryController::class, 'show'])->middleware('auth:sanctum');