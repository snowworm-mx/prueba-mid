import { useState } from "react";
import { register } from "../services/api";
import { useNavigate } from "react-router-dom";
import {
  emailValidation,
  passwordValidation,
  nameValidation,
} from "./DataValidation";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newErrors = {
        name: nameValidation(formData.name),
        email: emailValidation(formData.email),
        password: passwordValidation(formData.password),
      };

      if (!newErrors.email && !newErrors.password && !newErrors.name) {
        await register({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });

        alert("Register successful. Please login.");
        navigate("/login");
      } else {
        setErrors(newErrors);
      }
    } catch (error) {
      console.error(error.response.data);
      alert("Error register");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div>
            <label>Full Name:</label>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-3 border rounded-lg focus:outline-none"
              required
            />
            {errors.name && (
              <p className="text-red-500 text-center">{errors.name}</p>
            )}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="text"
              placeholder="user@example.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-3 border rounded-lg focus:outline-none"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-center">{errors.email}</p>
            )}
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-3 border rounded-lg focus:outline-none"
              required
            />
            {errors.password && (
              <p className="text-red-500 text-center">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
