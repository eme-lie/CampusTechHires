import { createSlice } from "@reduxjs/toolkit";

interface UserAuthState {
  isLoggedIn: boolean;
}

const initialState: UserAuthState = {
  isLoggedIn: false,
};

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = userAuthSlice.actions;
export default userAuthSlice.reducer;
