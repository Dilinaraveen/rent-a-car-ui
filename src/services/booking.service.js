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

export const GetAllBookingsAdmin = async (token) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}${API_ENDPOINTS.GET_ALL_BOOKINGS_ADMIN}`,
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

export const changeBookingStatus = async (token, bookingId, status) => {
  try {
    const response = await axios.put(
      API_BASE_URL+API_ENDPOINTS.CHANGE_BOOKING_STATUS+bookingId+"/"+status,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      console.log('Booking status updated successfully.');
      return true; // Indicate success
    } else {
      console.log('Failed to update booking status.');
      return false; // Indicate failure
    }
  } catch (error) {
    console.error('Error updating booking status:', error);
    throw error; // Re-throw the error after logging
  }
};