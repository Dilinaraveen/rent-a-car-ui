import axios from 'axios';
import { API_BASE_URL, API_ENDPOINTS } from '../constants/ApiEndpoints';


export const LoginService = async (payload) => {
  try {
    const response = await axios.post(API_BASE_URL+API_ENDPOINTS.LOGIN, payload);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const SignUpService = async (payload) => {
  try {
    const response = await axios.post(API_BASE_URL+API_ENDPOINTS.SIGNUP, payload);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('SignUp error:', error);
    throw error;
  }
};

