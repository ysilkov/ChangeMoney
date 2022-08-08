import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getExchangeRate = createAsyncThunk(
  "exchange/getExchangeRate",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const exchangeRate = createSlice({
  name: "exchange",
  initialState: {
    USD: 0,
    UAH: 1,
    EUR: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getExchangeRate.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getExchangeRate.fulfilled]: (state, action) => {
      state.loading = false;
      state.EUR = action.payload[1].sale;
      state.USD = action.payload[0].sale;
    },
    [getExchangeRate.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default exchangeRate.reducer;
