import { createSlice } from '@reduxjs/toolkit'
import { login, signUp } from '../Thunk/Auth'

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
    loginStatus: false,
  },
  reducers: {
    setUser(state, action) {
      state.userData = action.payload
      state.loginStatus = true
    },
    logout(state, action) {
      state.userData = {}
      state.loginStatus = false;
    },
  },


  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.userData = null
        state.loginStatus = false
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.userData = action.payload
        state.loginStatus = true
      })
      .addCase(signUp.rejected, (state, action) => {
        state.userData = null
        console.log(action);
        state.loginStatus = false
      })
      .addCase(login.pending, (state) => {
        state.userData = null
        // console.log("Enter in the pending");
        state.loginStatus = false
      })
      .addCase(login.fulfilled, (state, action) => {
        // console.log("Enter in the fulfilled");
        state.userData = action.payload
        state.loginStatus = true
      })
      .addCase(login.rejected, (state, action) => {
        state.userData = null
        console.log(action);
        state.loginStatus = false
      })
  }

})
export const { setUser, logout } = UserSlice.actions;

export default UserSlice.reducer;