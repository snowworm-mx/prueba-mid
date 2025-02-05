import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById, updateProduct } from "../services/api";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await getProductById(id);

      setProduct({
        name: response.data.name,
        description: response.data.description,
        price: response.data.price,
        stock: response.data.quantity,
      });
    } catch (error) {
      console.error("Error fetching the product", error);
      setError("Product not found");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!product.name || !product.price || !product.quantity) {
      setError("Name, price, and stock are required.");
      return;
    }

    const formData = new FormData();

    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("quantity", product.quantity);

    formData.append("_method", "PUT");

    try {
      await updateProduct(id, formData);
      navigate("/products");
    } catch (err) {
      setError("Error updating product.", err);
    }
  };

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-6 max-w-lg">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
        Edit Product
      </h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-md rounded-lg"
      >
        <label className="block mb-2">Product Name</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
          required
        />

        <label className="block mb-2">Description</label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
        ></textarea>

        <label className="block mb-2">Price</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
          required
        />

        <label className="block mb-2">Stock</label>
        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
          required
        />

        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg">
          Update Product
        </button>
      </form>
    </div>
  );
}
