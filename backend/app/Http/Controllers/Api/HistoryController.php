<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\History;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;

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

    public function updateStock(Request $request) {
        $validated = $request->validate([
            'product_id' => 'required|exists:products,id',
            'stock' => 'required|integer|min:0',
        ]);

        $product = Product::findOrFail($validated['product_id']);
        $type = $validated['stock'] > $product->stock ? 'INCREASE' : 'DECREASE';

        $product->stock = $validated['stock'];
        $product->save();

        $movement = History::create([
            'product_id' => $product->id,
            'user_id' => Auth::id(),
            'quantity' => $validated['stock'],
            'type' => $type,
        ]);

        return response()->json($movement, 201);
    }

    public function show($id) {
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
        ->findOrFail($id);

        return response()->json($movement);
    }
}
