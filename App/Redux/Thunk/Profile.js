import { createAsyncThunk } from "@reduxjs/toolkit";
import Toast from 'react-native-simple-toast';
import ProfileService from "../../Services/Profile";


export const putProfile = createAsyncThunk('profile/updateProfile', async (data) => {
    const response = await ProfileService.putProfile({
        name : data.name,
        email : data.email,
        contact : data.contact,
        postalcode : data.postalcode
    });

    Toast.show(`${response.message}`, Toast.SHORT, Toast.BOTTOM);
    console.log("Data ::: ", data);
    console.log("response message", response.message);

    return data;
})

export const getProfile = createAsyncThunk('profile/getProfile', async () => {
    // console.log("innnnn");
    const response = await ProfileService.getProfile();
    // console.log("response:::", response);
    return response.data;
})


export const updateProfile = createAsyncThunk('product/modify/image/addProductImage', async (data) => {
    // console.log("innnnn");
    const response = await ProfileService.uploadProfile(data);
    console.log("response:::", response);
    return response.url;
})

