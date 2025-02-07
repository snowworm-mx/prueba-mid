<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\History;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;
use Exception;

class HistoryController extends Controller
{
    public function index() {
        $movements = History::select(
            'history.id',
            'products.name as product',
            'users.name as user',
            'history.quantity',
            'history.type',
            'history.created_at'
        )
        ->join('products', 'history.product_id', '=', 'products.id')
        ->join('users', 'history.user_id', '=', 'users.id')
        ->latest()
        ->paginate(10);

        return response()->json($movements);
    }

    public function createMovement(Request $request) {
        try {
            $validated = $request->validate([
                'product_id' => 'required|exists:products,id',
                'quantity' => 'required|integer|min:0',
                'type' => 'required|string',
            ]);
    
            $product = Product::findOrFail($validated['product_id']);

            $movement = History::create([
                'product_id' => $product->id,
                'user_id' => Auth::id(),
                'quantity' => $validated['quantity'],
                'type' => $validated['type'],
            ]);
    
            return response()->json($movement, 201);
           
        } catch (Exception $e) {
            return response()->json(['message' => 'Product not found'], 404);
        }
    }

    public function show($id) {
        try {
            $movement = History::select(
                'history.id',
                'products.name as product',
                'users.name as user',
                'history.quantity',
                'history.type',
                'history.created_at'
            )
            ->join('products', 'history.product_id', '=', 'products.id')
            ->join('users', 'history.user_id', '=', 'users.id')
            ->where('history.product_id', $id)
            ->orderBy('history.created_at', 'desc')
            ->paginate(10);
            
            return response()->json($movement);
        } catch (Exception $e) {
            return response()->json([
                'error' => 'Error fetching movements',
                'message' => $e->getMessage(),
            ], 500);
        }
    }
}
