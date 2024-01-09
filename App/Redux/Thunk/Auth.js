import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../Services/Auth";

export const login = createAsyncThunk('auth/login', async(data) => {
    // console.log(data);
    const response = await AuthService.login(data)
    // console.log("response", response);
    const token = AuthService.setToken(response.token);
    // console.log(token);
    return response.data;
})

export const signUp = createAsyncThunk('auth/register', async(data) => {
    // console.log(data);
    const response = await AuthService.signUp(data)
    // console.log("response", response);
    return response.data;
})


