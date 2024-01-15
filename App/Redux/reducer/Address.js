import { createSlice } from '@reduxjs/toolkit';
import { addAddress, defaultAddress, deleteAddress, getAddress } from '../Thunk/Address';

export const AddressSlice = createSlice({
    name:'address',
    initialState:{
        addressData:[],
        addAddressLoading: false,

        getAddressData: [],
        getAddressLoading: false,

        defaultAddress: [],
        defaultAddressLoading: false
    },

    extraReducers:(builder) => {
        builder
        .addCase(addAddress.pending, (state, action) => {
            addAddressLoading = true
            // state.addressData = []
        })
        .addCase(addAddress.fulfilled, (state, action) => {
            addAddressLoading = false,
            // console.log("action: --------------", action);
            state.addressData = action.payload;
        })
        .addCase(addAddress.rejected, (state, action) => {
            addAddressLoading = false
        })


        .addCase(getAddress.pending, (state, action) => {
            getAddressLoading = true
            // state.addressData = []
        })
        .addCase(getAddress.fulfilled, (state, action) => {
            getAddressLoading = false,
            // console.log("action: --------------", action);
            state.getAddressData = action.payload;
        })
        .addCase(getAddress.rejected, (state, action) => {
            getAddressLoading = false
        })

        .addCase(deleteAddress.pending, (state, action) => {
            getAddressLoading = true
            // state.addressData = []
        })
        .addCase(deleteAddress.fulfilled, (state, action) => {
            getAddressLoading = false;
            // console.log("action: --------------", action.payload);
            // state.getAddressData = action.payload;
            const data = state.getAddressData.filter(
                item => item._id != action.payload
            );
            state.getAddressData = data;
        })
        .addCase(deleteAddress.rejected, (state, action) => {
            getAddressLoading = false
        })

        .addCase(defaultAddress.pending, (state, action) => {
            defaultAddressLoading = true;
        })
        .addCase(defaultAddress.fulfilled, (state, action) => {
            defaultAddressLoading = false;
            state.defaultAddress = action.payload;
            // console.log("ksjhkjsfhkdf:-", action.payload);
            // console.log("hfakkkkkkkkk:- ", state.defaultAddress);
        })
        .addCase(defaultAddress.rejected,(state, action) => {
            defaultAddressLoading = false
        })
    }
})

export default AddressSlice.reducer;