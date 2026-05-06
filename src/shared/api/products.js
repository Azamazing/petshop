import axios from "./axiosInstance";

export const fetchAllProducts = async () => {
  const response = await axios.get(`/products/all`);
  return response.data;
};
