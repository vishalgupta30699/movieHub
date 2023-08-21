import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: {},
  genres: {},
};

export const homeSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    getGeneres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const { getApiConfiguration, getGeneres } = homeSlice.actions;

export default homeSlice.reducer;
