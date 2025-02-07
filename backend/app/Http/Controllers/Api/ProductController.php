<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Exception;
use Illuminate\Validation\ValidationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ProductController extends Controller
{
    public function index(Request $request) {
        try {
            $query = Product::query();

            if ($request->has('search')) {
                $searchTerm = $request->search;
                $query->where('name', 'LIKE', "%{$searchTerm}%")
                    ->orWhere('description', 'LIKE', "%{$searchTerm}%");
            }

            return response()->json($query->paginate(10)->appends(['search' => $request->search]), 200);
        } catch (Exception $e) {
            return response()->json(['error' => 'Error getting products'], 500);
        }    
    }

    public function store(Request $request) {
        try {
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
            ], 201);
        } catch (ValidationException $e) {
            return response()->json([
                'error' => 'Validation error',
                'messages' => $e->errors(),
            ], 422);
        } catch (Exception $e) {
            return response()->json([
                'error' => 'Error creating the product',
                'message' => $e->getMessage(),
            ], 500);
        }   
    }

    public function show($id) {
        try {
            $product = Product::findOrFail($id);

            return response()->json([
                'message' => 'Product found',
                'product' => $product,
            ], 200);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'error' => 'Product not found',
                'message' => 'The product does not exist',
            ], 404);
        } catch (Exception $e) {
            return response()->json([
                'error' => 'Error getting the product',
                'message' => $e->getMessage(),
            ], 500);
        }

        
    }

    public function update(Request $request, $id) {
        try {
            $fields = $request->validate([
                'name' => 'required|string|max:255',
                'description' => 'nullable|string',
                'price' => 'required|numeric|min:0',
                'stock' => 'required|integer|min:0',
            ]);

            $product = Product::findOrFail($id);
            $product->update($fields);

            return response()->json([
                'message' => 'Product updated',
                'product' => $product,
            ], 200);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'error' => 'Product not found',
                'message' => 'The product does not exist',
            ], 404);
        } catch (ValidationException $e) {
            return response()->json([
                'error' => 'Validation error',
                'messages' => $e->errors(),
            ], 422);
        } catch (Exception $e) {
            return response()->json([
                'error' => 'Error updating the product',
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    public function delete($id) {
        try {
            $product = Product::find($id);
            $product->delete();

            return response()->json([
                'message' => 'Product deleted',
            ], 200);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'error' => 'Product not found',
                'message' => 'The product with the given ID does not exist',
            ], 404);
        } catch (Exception $e) {
            return response()->json([
                'error' => 'An error occurred while deleting the product',
                'message' => $e->getMessage(),
            ], 500);
        }
        
    }
}
