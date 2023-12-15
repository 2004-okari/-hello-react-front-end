import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: '',
  status: 'idle',
  error: '',
};

const baseUrl = 'http://127.0.0.1:3000/greetings';

export const fetchGreetings = createAsyncThunk(
  'greetings/fetchGreetings',
  async () => {
    const response = await axios.get(baseUrl);
    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }
    return response.data;
  },
);

const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        state.status = 'done';
        state.value = action.payload;
      })
      .addCase(fetchGreetings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ? action.payload.greeting : 'Unknown error';
      });
  },
});

export default greetingSlice.reducer;
