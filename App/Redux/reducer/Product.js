import { createSlice } from '@reduxjs/toolkit';
import { category } from '../Thunk/Product';

export const ProductSlice = createSlice({
    name : 'product',
    initialState:{
       categoryData: [],
        loading: false
    },

    extraReducers:(builder) => {
        builder
        .addCase(category.pending, (state, action) => {
            state.loading = true,
            state.categoryData = [];
        })
        .addCase(category.fulfilled, (state, action) => {
            state.loading = false,
            state.categoryData = action.payload;
        })
        .addCase(category.rejected, (state, action) => {
            state.loading = false
        })
    }   
})

export default ProductSlice.reducer;