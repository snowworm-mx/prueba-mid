<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index(Request $request) {
        $query = Product::query();

        if ($request->has('search')) {
            $searchTerm = $request->search;
            $query->where('name', 'LIKE', "%{$searchTerm}%")
                  ->orWhere('description', 'LIKE', "%{$searchTerm}%");
        }

        return response()->json($query->paginate(10));
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

    public function update(Request $request, $id) {
        try {
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
        } catch (\Exception $e) {
            return response()->json(['message' => 'Product not found'], 404);
        }
    }

    public function delete($id) {
        $product = Product::find($id);
        $product->delete();

        return response()->json([
            'message' => 'Product deleted',
        ]);
    }
}
