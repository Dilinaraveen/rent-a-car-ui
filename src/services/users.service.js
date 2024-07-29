import axios from "axios";
import { API_BASE_URL, API_ENDPOINTS } from "../constants/ApiEndpoints";

export const GetAllUsers= async (token) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}${API_ENDPOINTS.GET_ALL_USERS}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error getting all bookings:", error);
      throw error;
    }
  };