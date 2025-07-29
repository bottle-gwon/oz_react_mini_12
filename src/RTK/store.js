import { configureStore } from "@reduxjs/toolkit";
import { bgModeReducer } from "./slice";


const store = configureStore({
  reducer: {
    bg: bgModeReducer,
  }
})


export default store;