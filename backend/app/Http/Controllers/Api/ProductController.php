<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index() {
        $products = Product::paginate(10);
        return response()->json($products);
    }

    public function store(Request $request) {
        $fields = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
        ]);

        $product = Product::create($fields);

        return response()->json([
            'message' => 'Product created',
            'product' => $product,
            'status' => 201,
        ]);
    }

    public function show($id) {

        return response()->json([
            'message' => 'Product found',
            'product' => Product::find($id),
        ]);
    }

    public function update(Request $request) {
        $fields = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
        ]);

        $product = Product::find($id);
        $product->update($fields);

        return response()->json([
            'message' => 'Product updated',
            'product' => $product,
        ]);
    }

    public function delete($id) {
        $product = Product::find($id);
        $product->delete();

        return response()->json([
            'message' => 'Product deleted',
        ]);
    }
}
