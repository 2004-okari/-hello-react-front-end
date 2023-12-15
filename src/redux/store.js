import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './reducers/greetingSlice';

const store = configureStore({
  reducer: {
    greetings: greetingSlice,
  },
});

export default store;
