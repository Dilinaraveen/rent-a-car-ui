import axios from "axios";
import { API_BASE_URL, API_ENDPOINTS } from "../constants/ApiEndpoints";

export const GetAllCarsAdmin = async (token) => {
  try {
    const response = await axios.get(
      API_BASE_URL + API_ENDPOINTS.GET_ALL_CARS_ADMIN,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
};

export const GetAllCars = async () => {
  try {
    const response = await axios.get(API_BASE_URL + API_ENDPOINTS.GET_ALL_CARS);
    return response.data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
};

export const SearchCars = async (payload) => {
  try {
    const response = await axios.post(
      API_BASE_URL + API_ENDPOINTS.SEARCH_CARS,
      payload
    );
    return response.data.carDtoList;
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
};

export const GetCarBrands = async () => {
  try {
    const response = await axios.get(
      API_BASE_URL + API_ENDPOINTS.GET_CAR_BRANDS
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching car brands:", error);
    throw error;
  }
};

export const AddNewCar = async (payload, token) => {
  try {
    const formData = new FormData();
    Object.keys(payload).forEach((key) => {
      formData.append(key, payload[key]);
    });

    console.log(payload);

    const response = await axios.post(
      API_BASE_URL + API_ENDPOINTS.ADD_NEW_CAR,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding new car:", error);
    throw error;
  }
};

export const UpdateCar = async (carId, payload, token) => {
  
  try {
    
    const response = await axios.put(
      API_BASE_URL+API_ENDPOINTS.UPDATE_CAR+carId,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error updating car:', error.response ? error.response.data : error.message);
    throw error;
  }
};


export const DeleteCar = async (carId, token) => {
  try {
    const response = await axios.delete(
      API_BASE_URL + API_ENDPOINTS.DELETE_CAR + carId,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      }
    );
    console.log(response);
    return response.status;
  } catch (error) {
    console.error("Error deleting car:", error);
    throw error;
  }
};
