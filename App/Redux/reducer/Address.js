import { createSlice } from '@reduxjs/toolkit';
import { addAddress } from '../Thunk/Address';

export const AddressSlice = createSlice({
    name:'address',
    initialState:{
        addressData:[],
        addAddressLoading: false
    },

    extraReducers:(builder) => {
        builder
        .addCase(addAddress.pending, (state, action) => {
            addAddressLoading = true,
            state.addressData = []
        })
        .addCase(addAddress.fulfilled, (state, action) => {
            addAddressLoading = false,
            console.log("action: --------------", action);
            state.addressData = action.payload;
        })
        .addCase(addAddress.rejected, (state, action) => {
            addAddressLoading = false
        })
    }
})

export default AddressSlice.reducer;