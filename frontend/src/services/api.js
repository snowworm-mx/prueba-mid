import axios from "axios";

const API_URL = "http://localhost:8002/api";

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const register = async (userData) => {
  return api.post("/register", userData);
};

export const login = async (credentials) => {
  await api.get("/sanctum/csrf-cookie");
  return api.post("/login", credentials);
};

export const logout = async () => {
  return api.post("/logout");
};

export const getProducts = async (page = 1) => {
  return api.get(`/products?page=${page}`);
};

export const createProduct = async (productData) => {
  return api.post("/products", productData);
};

export const getProductById = async (id) => {
  return api.get(`/products/${id}`);
};

export const updateProduct = async (id, productData) => {
  return api.put(`/products/${id}`, productData);
};

export const deleteProduct = async (id) => {
  return api.delete(`/products/${id}`);
};
