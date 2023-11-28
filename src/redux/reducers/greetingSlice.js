
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('greeting/fetchData', async () => {
  try {
    const response = await axios.get('http://localhost:3000/greetings/random');
    console.log(response.greeting);
    return response.greeting;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
});

// Greeting slice
const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greetings: '',
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.greetings = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default greetingSlice.reducer;
