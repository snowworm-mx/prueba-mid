import axios from "axios";

const API_URL = "http://localhost:8000/api";

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});

export const register = async (userData) => {
  try {
    const response = await api.post("/register", userData);
    return response;
  } catch (error) {
    console.error("Registration error:", error.response?.data || error.message);
    throw error.response?.data || { error: "An unexpected error occurred" };
  }
};

export const login = async (credentials) => {
  try {
    await api.get("http://localhost:8000/sanctum/csrf-cookie");
    const response = await api.post("/login", credentials);
    return response;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error.response?.data || { error: "An unexpected error occurred" };
  }
};

export const logout = async () => {
  try {
    const response = await api.post("/logout");
    return response;
  } catch (error) {
    console.error("Logout error:", error.response?.data || error.message);
  }
};

export const getUser = async () => {
  const response = await api.get("/user");
  return response;
};

export const getProducts = async (page = 1, search = "") => {
  try {
    const response = api.get(`/products?page=${page}&search=${search}`);
    return response;
  } catch (error) {
    console.error(
      "Error getting products:",
      error.response?.data || error.message
    );
    throw error.response?.data || { error: "An unexpected error occurred" };
  }
};

export const createProduct = async (productData) => {
  try {
    const response = api.post("/products", productData);
    return response;
  } catch (error) {
    console.error(
      "Error creating product:",
      error.response?.data || error.message
    );
    throw error.response?.data || { error: "An unexpected error occurred" };
  }
};

export const getProductById = async (id) => {
  try {
    const response = api.get(`/products/${id}`);
    return response;
  } catch (error) {
    console.error(
      "Error getting product:",
      error.response?.data || error.message
    );
    throw error.response?.data || { error: "An unexpected error occurred" };
  }
};

export const updateProduct = async (id, productData) => {
  try {
    const response = api.put(`/products/${id}`, productData);
    return response;
  } catch (error) {
    console.error(
      "Error updating product:",
      error.response?.data || error.message
    );
    throw error.response?.data || { error: "An unexpected error occurred" };
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = api.delete(`/products/${id}`);
    return response;
  } catch (error) {
    console.error(
      "Error deleting product:",
      error.response?.data || error.message
    );
    throw error.response?.data || { error: "An unexpected error occurred" };
  }
};

export const createMovement = async (movementData) => {
  try {
    const response = await api.post("/stock", movementData);
    console.log(response);
  } catch (error) {
    console.error(
      "Error creating movement:",
      error.response?.data || error.message
    );
    throw error.response?.data || { error: "An unexpected error occurred" };
  }
};

export const getInventoryMovements = async (page = 1, productId) => {
  try {
    let url = `/history/${productId}?page=${page}`;
    const response = await api.get(url);
    console.log(response.data.data);
    return response;
  } catch (error) {
    console.error(
      "Error getting Inventary Movements:",
      error.response?.data || error.message
    );
    throw error.response?.data || { error: "An unexpected error occurred" };
  }
};
