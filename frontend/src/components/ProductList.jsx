import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../services/api";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    showProducts(page);
  }, [page]);

  const showProducts = async (page) => {
    setLoading(true);

    try {
      const response = await getProducts(page);

      setProducts(response.data.data);
      setTotalPages(response.data.meta.last_page);
    } catch (error) {
      console.error("Error loading products", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure of delete this?")) return;

    try {
      await deleteProduct(id);
      showProducts(page);
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-blue-600">
        Product Manager
      </h1>
      <p className="text-center text-gray-500 mb-4"></p>

      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search products by name"
          className="border p-2 rounded w-1/3"
        />
        <Link
          to="/inventory-movements"
          className="bg-gray-500 text-white px-4 py-2 rounded-lg"
        >
          📜 Inventary movements
        </Link>
        <Link
          to="/products/create"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          + Add new product
        </Link>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200 text-gray-600 uppercase text-sm">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Product Name</th>
              <th className="p-3">Description</th>
              <th className="p-3">Price</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Actions</th>
              <th className="p-3">History</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="7" className="text-center p-4">
                  Loading...
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product.id} className="border-b text-center">
                  <td className="p-3">{product.id}</td>
                  <td className="p-3 font-semibold">{product.name}</td>
                  <td className="p-3">
                    {product.description || "No description"}
                  </td>
                  <td className="p-3">${product.price.toFixed(2)}</td>
                  <td className="p-3">{product.quantity}</td>
                  <td className="p-3 flex justify-center space-x-2">
                    <Link
                      to={`/products/${product.id}`}
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      👁 Show
                    </Link>
                    <Link
                      to={`/products/edit/${product.id}`}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      ✏ Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      🗑 Delete
                    </button>
                    <Link
                      to={`/inventory-movements?product=${product.id}`}
                      className="bg-gray-400 text-white px-3 py-1 rounded"
                    >
                      📜 History
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center space-x-2 mt-4">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 rounded ${
              page === i + 1 ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
