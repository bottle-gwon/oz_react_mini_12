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

const loginSlice = createSlice({
  name: 'login',
  initialState:{
    isLogin: false,
    id: null,
    email: null,
    profileImageUrl : null,
  },
  reducers: {
    loginSucess:(state, action) =>{
      state.isLogin = true
      state.id = action.payload.id
      state.email = action.payload.email
      state.profileImageUrl = action.payload.profileImageUrl
    },
    logoutSuccess:(state) =>{
      state.isLogin = false
      state.id = null
      state.email = null
      state.profileImageUrl = null
    }
    
  }
})

export const {toggleMode} = bgModeSlice.actions;
export const bgModeReducer = bgModeSlice.reducer;

export const{loginSucess, logoutSuccess} = loginSlice.actions;
export const login = loginSlice.reducer;