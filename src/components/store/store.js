import { configureStore } from "@reduxjs/toolkit";
import exchangeRateReducer from "./exchangeRate";

export const store = configureStore({
    reducer: {
      rate: exchangeRateReducer
    },
  });