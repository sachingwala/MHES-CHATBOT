import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL || "http://localhost:5000/api";

export const fetchJournalEntries = async (userId) => {
  const response = await axios.get(`${API_URL}/journal/${userId}`);
  return response.data;
};

export const addJournalEntry = async (userId, entry) => {
  const response = await axios.post(`${API_URL}/journal`, { userId, ...entry });
  return response.data;
};
