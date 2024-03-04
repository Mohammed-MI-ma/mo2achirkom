import { createSlice } from "@reduxjs/toolkit";

// Define initial state for language
const initialState = {
  language: "fr", // Default language
};

// Define slice for language
const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = applicationSlice.actions;

export default applicationSlice.reducer;
