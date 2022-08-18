import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from './companies/companiesSlice.js';

export const store = configureStore({
  reducer: {
  	companies: companiesReducer
  },
})