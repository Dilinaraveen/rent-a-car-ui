import axios from 'axios';
import { API_BASE_URL, API_ENDPOINTS } from "../constants/ApiEndpoints";

export const GetAllCarsAdmin = async (token) => {
  try {
    const response = await axios.get(API_BASE_URL + API_ENDPOINTS.GET_ALL_CARS_ADMIN, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
};

export const GetAllCars = async () => {
  try {
    const response = await axios.get(API_BASE_URL + API_ENDPOINTS.GET_ALL_CARS);
    return response.data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
};

export const SearchCars = async (payload) => {
  try{
    const response = await axios.post(API_BASE_URL + API_ENDPOINTS.SEARCH_CARS, payload);
    return response.data.carDtoList;
  }catch(error){
    console.error('Error fetching cars:', error);
    throw error;
  }
}
