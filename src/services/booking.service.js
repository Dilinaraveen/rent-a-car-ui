import axios from "axios";
import { API_BASE_URL, API_ENDPOINTS } from "../constants/ApiEndpoints";

export const BookACar = async (formData) => {
  try {
    const response = await axios.post(
        API_BASE_URL + API_ENDPOINTS.BOOK_A_CAR,
      formData
    );
    return response.data;
  } catch (error) {
    console.error("Error booking car:", error);
    throw error;
  }
};
