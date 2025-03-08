import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL || 'http://localhost:5000';

export const fetchVideos = async () => {
  const response = await axios.get(`${API_URL}/therapy/videos`);
  return response.data;
};

export const fetchMeditationSchedule = async () => {
  const response = await axios.get(`${API_URL}/therapy/meditations`);
  return response.data;
};

export const fetchBookRecommendations = async () => {
  const response = await axios.get(`${API_URL}/therapy/books`);
  return response.data;
};

export const bookTherapySession = async (sessionData) => {
  const response = await axios.post(`${API_URL}/therapy/book-session`, sessionData);
  return response.data;
};
