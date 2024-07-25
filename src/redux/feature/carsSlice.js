import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GetAllCars, GetAllCarsAdmin, SearchCars } from '../../services/cars.service';

// Thunks for async actions
export const fetchAllCars = createAsyncThunk('cars/fetchAllCars', async () => {
  const response = await GetAllCars();
  return response;
});

export const fetchAllCarsAdmin = createAsyncThunk('cars/fetchAllCarsAdmin', async (jwt) => {
  const response = await GetAllCarsAdmin(jwt);
  return response;
});

export const searchCars = createAsyncThunk('cars/searchCars', async (payload) => {
  console.log("searchCars")
  const response = await SearchCars(payload);
  
  return response;
});


const initialState = {
  cars: [],
  loading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload;
      })
      .addCase(fetchAllCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchAllCarsAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllCarsAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload;
      })
      .addCase(fetchAllCarsAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(searchCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload;
      })
      .addCase(searchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default carsSlice.reducer;
