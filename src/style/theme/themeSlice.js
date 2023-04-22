import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    currentTheme: "light",
  },
  reducers: {
    toggleTheme(state) {
      state.currentTheme = state.currentTheme === "light" ? "dark" : "light";
    },
    setTheme(state, action) {
      state.currentTheme = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
