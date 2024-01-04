import { createSlice } from '@reduxjs/toolkit';
import {  category, productList, subCategory } from '../Thunk/Product';

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
            console.log("pending: " ,action);
            state.categoryData = [];
        })
        .addCase(category.fulfilled, (state, action) => {
            state.loading = false,
            console.log("fullfilled: " ,action);
            state.categoryData = action.payload;
        })
        .addCase(category.rejected, (state, action) => {
            console.log("rejected: " ,action);
            state.loading = false
        })
        .addCase(subCategory.pending, (state, action) => {
            state.loading = true,
            console.log("pending: " ,action);
            state.categoryData = [];
        })
        .addCase(subCategory.fulfilled, (state, action) => {
            state.loading = false,
            console.log("fullfilled: " ,action);
            state.categoryData = action.payload;
        })
        .addCase(subCategory.rejected, (state, action) => {
            console.log("rejected: " ,action);
            state.loading = false
        })
        .addCase(productList.pending, (state, action) => {
            state.loading = true,
            console.log("pending: " ,action);
            state.categoryData = [];
        })
        .addCase(productList.fulfilled, (state, action) => {
            state.loading = false,
            console.log("fullfilled: " ,action);
            state.categoryData = action.payload;
        })
        .addCase(productList.rejected, (state, action) => {
            console.log("rejected: " ,action);
            state.loading = false
        })

    }   
})

export default ProductSlice.reducer;