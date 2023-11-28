import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMessage = createAsyncThunk(
  'message/fetchMessage',
  async () => {
    const response = await axios.get('http://localhost:3000/greetings/random');
    console.log(response.data);
    return response.data;
  }
);

const messageSlice = createSlice({
  name: 'message',
  initialState: { message: 'null', status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessage.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMessage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.message = action.payload.greeting;
        console.log(action.payload.greeting);
      })
      .addCase(fetchMessage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default messageSlice.reducer;