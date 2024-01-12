import { createAsyncThunk } from "@reduxjs/toolkit";
import Toast from 'react-native-simple-toast';
import AddressService from "../../Services/Address";


export const addAddress = createAsyncThunk('address/addAddress', async (data) => {
    const response = await AddressService.addAddress({
        name: data.name,
        mobileNo: data.mobileNo,
        address: data.address,
        landmark: data.landmark,
        pincode: data.pincode,
        addressType: data.addressType
    }).catch(err => {
        console.log("error: ", err);
        Toast.show(`${err.message}`, Toast.SHORT, Toast.BOTTOM);
    })
    // console.log("Data:--------------", data);
    // console.log("response:--------", response);
    Toast.show(`${response.message}`, Toast.SHORT, Toast.BOTTOM);
    return data;
})


export const getAddress = createAsyncThunk('address/showAddress', async() => {
    const response = await AddressService.getAddress();

    // console.log("Response:----------", response);
    
    return response.data;
})


export const deleteAddress = createAsyncThunk('address/deleteAddress', async(data) => {
    // console.log("data: -------------", data);
    const response = await AddressService.deleteAddress({
        address_id : data
    }).catch((err) => {
        console.log("error:", err);
    })
    // console.log("Response:----------", response);
    Toast.show(`${response.message}`, Toast.SHORT, Toast.BOTTOM);
    return data;
})


export const defaultAddress = createAsyncThunk('address/changeDefault',async(data) => {
    // console.log("Data::::::::-----------", data);
    const response = await AddressService.defaultAddress({
        address_id: data
    })
    .catch((err) => {
        console.log("error:::::", err);
    })
    // console.log("Response::::::::-----------", response);
    return response;
})