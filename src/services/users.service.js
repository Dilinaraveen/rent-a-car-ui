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

  export const UpdateUserRole = async (jwt, userId, newRole) => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}${API_ENDPOINTS.CHANGE_USER_ROLE}${userId}/role`,
        { role: newRole },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Failed to update user role', error);
      throw error;
    }
  };