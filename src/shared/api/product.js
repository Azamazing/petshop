import axios from "./axiosInstance";

export const fetchProductById = async (productId) => {
  const response = await axios.get(`/products/${productId}`);
  return response.data;
};
