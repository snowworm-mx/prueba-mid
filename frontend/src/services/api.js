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
  return api.post("/register", userData);
};

export const login = async (credentials) => {
  await api.get("http://localhost:8000/sanctum/csrf-cookie");
  return api.post("/login", credentials);
};

export const logout = async () => {
  const response = api.post("/logout");
  console.log(response);
  return response;
};

export const getUser = async () => {
  return api.get("/user");
};

export const getProducts = async (page = 1, search = "") => {
  return api.get(`/products?page=${page}&search=${search}`);
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

export const createMovement = async (movementData) => {
  console.log(movementData);
  const response = await api.post("/stock", movementData);
  console.log(response);
  return response;
};

export const getInventoryMovements = async (page = 1, productId) => {
  let url = `/history/${productId}?page=${page}`;

  return api.get(url);
};
