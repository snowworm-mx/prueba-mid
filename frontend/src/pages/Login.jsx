import { useState } from "react";
import { login } from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import { emailValidation, passwordValidation } from "./DataValidation";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    credentials: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setErrors({ email: "", password: "", credentials: "" });
    setForm((prevValue) => {
      return { ...prevValue, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newErrors = {
        email: emailValidation(form.email),
        password: passwordValidation(form.password),
      };

      if (!newErrors.email && !newErrors.password) {
        const response = await login({
          email: form.email,
          password: form.password,
        });

        console.log(response);

        navigate("/products");
      } else {
        setErrors(newErrors);
      }
    } catch (error) {
      console.error(error);
      setErrors({
        credentials: error.message || "Login failed. Please try again.",
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="user@example.com"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-3 border rounded-lg focus:outline-none"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-center">{errors.email}</p>
            )}
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-3 border rounded-lg focus:outline-none"
              required
            />
            {errors.password && (
              <p className="text-red-500 text-center">{errors.password}</p>
            )}
            {errors.credentials && (
              <p className="text-red-500 text-center">{errors.credentials}</p>
            )}
          </div>

          <button
            className="w-full bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg"
            type="submit"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Create an account{" "}
          <Link
            to="/register"
            className="text-blue-500 hover:underline font-semibold"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
