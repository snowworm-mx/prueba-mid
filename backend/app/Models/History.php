<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\User;
use App\Models\Product;

class History extends Model
{
    use HasFactory;
    protected $table = 'history';
    protected $fillable = [
        'product_id',
        'user_id',
        'quantity',
        'type',
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function product() {
        return $this->belongsTo(Product::class);
    }
}
