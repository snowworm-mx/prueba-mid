import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../services/api";

export default function CreateProduct() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.price || !form.stock) {
      setError("Name, price, and stock are required.");
      return;
    }

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("description", form.description);
    formData.append("price", form.price);
    formData.append("stock", form.stock);

    try {
      await createProduct(formData);
      navigate("/products");
    } catch (err) {
      setError("Error creating product", err);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-lg">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
        Create Product
      </h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-md rounded-lg"
      >
        <label className="block mb-2">Product Name</label>
        <input
          type="text"
          placeholder="Enter product name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
          required
        />

        <label className="block mb-2">Description</label>
        <textarea
          placeholder="Enter product description"
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
        ></textarea>

        <label className="block mb-2">Price</label>
        <input
          type="number"
          placeholder="Enter price"
          name="price"
          value={form.price}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
          required
        />

        <label className="block mb-2">Stock</label>
        <input
          type="number"
          placeholder="Enter stock"
          name="stock"
          value={form.stock}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
          required
        />

        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg">
          Create Product
        </button>
      </form>
    </div>
  );
}
