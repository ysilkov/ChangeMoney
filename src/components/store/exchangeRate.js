import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
      EUR: 0,
      UAH: 1,
      USD: 0,
      isLoading: false,
  };

  export const getExchangeRate = createAsyncThunk(
    "exchange/getExchangeRat",
    async (_, { rejectWithValue, dispatch }) => {
      try {
        const response = await fetch(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`);
        const dataRes = await response.json();
        localStorage.setItem("token", dataRes.token);
        localStorage.setItem("fullName", dataRes.user.fullName);
        localStorage.setItem("id", dataRes.user.id);
        dispatch(rate(dataRes.user));
      } catch (e) {
        console.log(e.message);
      }
    }
  );
  
  export const exchangeRate = createSlice({
    name: "exchange",
    initialState,
    reducers: {
      rate: (state, action) => {
        state = action.payload;
      },
    },
  });
  export const { rate } = exchangeRate.actions;
  export default exchangeRate.reducer;