import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const getDashboardData = async () => {
  const response = await axios.get(`${API_URL}/dashboard`);
  return response.data;
};

export const predictDelivery = async (data) => {
  const response = await axios.post(`${API_URL}/predict`, data);
  return response.data;
};