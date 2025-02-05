import { useState } from "react";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";
import { emailValidation, passwordValidation } from "./DataValidation";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
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
        await login({ email: form.email, password: form.password });
        navigate("/dashboard");
      } else {
        setErrors(newErrors);
      }
    } catch (error) {
      console.error(error.response.data);
      alert("Error trying to login");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="user@example.com"
          value={form.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
