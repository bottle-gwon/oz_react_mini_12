import { configureStore } from "@reduxjs/toolkit";
import { bgModeReducer, login } from "./slice";


const store = configureStore({
  reducer: {
    bg: bgModeReducer,
    login: login,
  }
})


export default store;