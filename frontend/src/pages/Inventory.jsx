import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getInventoryMovements } from "../services/api";

export default function InventoryMovements() {
  const [movements, setMovements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams] = useSearchParams();

  const productId = searchParams.get("product");

  useEffect(() => {
    fetchMovements(page);
  }, [page, productId]);

  const fetchMovements = async (page) => {
    setLoading(true);
    try {
      const response = await getInventoryMovements(page, productId);

      setMovements(response.data.data);
      setTotalPages(response.data.last_page);
    } catch (error) {
      console.error("Error getting inventory movements", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-gray-600">
        {productId ? "Movements for Product" : "Inventory Movements"}
      </h1>

      <div className="bg-white shadow-md rounded-lg overflow-hidden mt-4">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200 text-gray-600 uppercase text-sm">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Product Name</th>
              <th className="p-3">User</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Type</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center p-4">
                  Loading...
                </td>
              </tr>
            ) : movements.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center p-4">
                  No movements found
                </td>
              </tr>
            ) : (
              movements.map((movement) => (
                <tr key={movement.id} className="border-b text-center">
                  <td className="p-3">{movement.id}</td>
                  <td className="p-3">{movement.product}</td>
                  <td className="p-3">{movement.user}</td>
                  <td className="p-3">{movement.quantity}</td>
                  <td
                    className={`p-3 font-semibold ${
                      movement.type === "INCREASE"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {movement.type}
                  </td>
                  <td className="p-3">
                    {new Date(movement.created_at).toLocaleString()}
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
              page === i + 1 ? "bg-gray-500 text-white" : "bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
