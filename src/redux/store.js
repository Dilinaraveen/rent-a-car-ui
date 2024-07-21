import { configureStore } from '@reduxjs/toolkit';
import authReducer from './feature/authSlice';
import carsReducer from './feature/carsSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        cars: carsReducer
    }
});

export default store;
