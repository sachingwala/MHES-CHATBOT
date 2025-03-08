import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchProgressData = async (userId) => {
  const response = await axios.get(`${API_URL}/progress/${userId}`);
  return response.data;
};
