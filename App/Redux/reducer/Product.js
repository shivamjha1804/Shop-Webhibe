import { createSlice } from '@reduxjs/toolkit';
import { addCart, addCartAdding, buy, category, fetchCart, productList, quantity, remove, subCategory } from '../Thunk/Product';

export const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        categoryData: [],
        categoryLoading: false,

        subCategoryData: [],
        subCategoryLoading: false,

        productListData: [],
        productListLoading: false,

        addCartData: [],
        addCartDataLoading: false,


        buyData: [],
        buyLoading: false,

        removeLoading: false,

        quantityData: [],
        quantityLoading: false

    },

    extraReducers: (builder) => {
        builder
            .addCase(category.pending, (state, action) => {
                state.categoryLoading = true,
                    // console.log("pending: " ,action);
                    state.categoryData = [];
            })
            .addCase(category.fulfilled, (state, action) => {
                state.categoryLoading = false,
                    // console.log("fullfilled: " ,action);
                    state.categoryData = action.payload;
            })
            .addCase(category.rejected, (state, action) => {
                // console.log("rejected: " ,action);
                state.categoryLoading = false
            })
            .addCase(subCategory.pending, (state, action) => {
                state.subCategoryLoading = true,
                    // console.log("pending: " ,action);
                    state.subCategoryData = [];
            })
            .addCase(subCategory.fulfilled, (state, action) => {
                state.subCategoryLoading = false,
                    // console.log("fullfilled: " ,action);
                    state.subCategoryData = action.payload;
            })
            .addCase(subCategory.rejected, (state, action) => {
                // console.log("rejected: " ,action);
                state.subCategoryLoading = false
            })
            .addCase(productList.pending, (state, action) => {
                state.productListLoading = true,
                    // console.log("pending: " ,action);
                    state.productListData = [];
            })
            .addCase(productList.fulfilled, (state, action) => {
                state.productListLoading = false,
                    // console.log("fullfilled: " ,action);
                    state.productListData = action.payload;
            })
            .addCase(productList.rejected, (state, action) => {
                // console.log("rejected: " ,action);
                state.productListLoading = false
            })


            .addCase(addCart.pending, (state, action) => {
                state.addCartDataLoading = true,
                    // console.log("pending: " ,action);
                    state.addCartData = [];
            })
            .addCase(addCart.fulfilled, (state, action) => {
                state.addCartDataLoading = false,
                    // console.log("fullfilled: ", action);
                    state.addCartData = action.payload;
            })
            .addCase(addCart.rejected, (state, action) => {
                // console.log("rejected: " ,action);
                state.addCartDataLoading = false
            })

            .addCase(fetchCart.pending, (state, action) => {
                state.addCartDataLoading = false
                // console.log("fullfilled: ", action);

            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.addCartDataLoading = false,
                    // console.log("fullfilled: ", action);
                    state.addCartData = action.payload;
            })

            .addCase(fetchCart.rejected, (state, action) => {
                // console.log("rejected: " ,action);
                state.addCartDataLoading = false
            })

            .addCase(quantity.pending, (state, action) => {
                state.quantityLoading = false
                console.log("fullfilled: ", action);

            })
            .addCase(quantity.fulfilled, (state, action) => {
                state.quantityLoading = false,
                    console.log("fullfilled: ", action);
                state.quantityData = action.payload;
            })

            .addCase(quantity.rejected, (state, action) => {
                console.log("rejected: " ,action);
                state.quantityLoading = false
            })
            .addCase(buy.pending, (state, action) => {
                state.buyLoading = true,
                    // console.log("pending: " ,action);
                    state.buyData = [];
            })
            .addCase(buy.fulfilled, (state, action) => {
                state.buyLoading = false,
                    // console.log("fullfilled: " ,action);
                    state.buyData = action.payload;
            })
            .addCase(buy.rejected, (state, action) => {
                // console.log("rejected: " ,action);
                state.buyLoading = false
            })
            .addCase(remove.pending, (state, action) => {
                state.removeLoading = true
                // console.log("pending: ", action);
            })
            .addCase(remove.fulfilled, (state, action) => {
                state.removeLoading = false;
                //     console.log("fullfilled:---> ", action);
                // console.log("state.addCartData---> ", state);
                // // console.log("dataaaaaaaaaaaaaaaaa: ",addCartData);
                const data = state.addCartData.filter(
                    item => item.product_id != action.payload
                );
                state.addCartData = data;
            })
            .addCase(remove.rejected, (state, action) => {
                // console.log("rejected: ", action);
                state.removeLoading = false
            })
    }
})

export default ProductSlice.reducer;