import { createSlice } from '@reduxjs/toolkit';
import { addAddress, deleteAddress, getAddress } from '../Thunk/Address';

export const AddressSlice = createSlice({
    name:'address',
    initialState:{
        addressData:[],
        addAddressLoading: false,

        getAddressData: [],
        getAddressLoading: false
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
            getAddressLoading = false,
            console.log("action: --------------", action);
            // state.getAddressData = action.payload;
            const data = state.getAddressData.filter(
                data => data.address_id != action.payload
            );
            state.getAddressData = data;
        })
        .addCase(deleteAddress.rejected, (state, action) => {
            getAddressLoading = false
        })
    }
})

export default AddressSlice.reducer;