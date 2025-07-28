import { createSlice } from "@reduxjs/toolkit";

const bgModeSlice = createSlice({
  name: 'bgModeReducer',
  initialState: 'dark',
  reducers: {
    toggleMode: (state) => {
      return state === 'light' ? 'dark' : 'light';
    },

  }
})

export const {toggleMode} = bgModeSlice.actions;
export const bgModeReducer = bgModeSlice.reducer;