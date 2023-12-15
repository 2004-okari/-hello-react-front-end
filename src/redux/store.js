import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from '../redux/reducers/greetingSlice';

const store = configureStore({
  reducer: {
    greetings: greetingSlice,
  },
});

export default store;