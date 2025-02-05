import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductList from "./components/ProductList";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/products" element={<ProductList />} />
        <Route path="/products/create" element={<CreateProduct />} />
        <Route path="/products/:id/edit" element={<EditProduct />} />
      </Routes>
    </Router>
  );
}
