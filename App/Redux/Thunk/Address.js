import { createAsyncThunk } from "@reduxjs/toolkit";
import Toast from 'react-native-simple-toast';
import AddressService from "../../Services/Address";


export const addAddress = createAsyncThunk('address/addAddress', async (data) => {
    const response = await AddressService.addAddress({
        name: data.name,
        mobileNo: data.mobileNo,
        address: data.address,
        landmark: data.lankmark,
        pincode: data.pincode,
        addressType: data.addressType
    });
    console.log("response:--------", response);

    return response;
})