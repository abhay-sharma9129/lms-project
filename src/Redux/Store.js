import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from './Slices/AuthSlice.js';

const store = configureStore({
  reducer: {   // ✅ must be singular
    auth: authSliceReducer,
  },
  devTools: true,
});

export default store;
