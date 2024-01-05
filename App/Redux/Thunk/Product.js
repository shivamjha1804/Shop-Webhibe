import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from "../../Services/Product";

export const category = createAsyncThunk('product/fetch/getCategories', async() => {
    const response = await ProductService.category();
    return response.result;
})

export const subCategory = createAsyncThunk('product/fetch/getSubCategories', async(data) => {
    const response = await ProductService.subCategory({category_id:data});
    // console.log("response:", response);
    return response.data;
})

export const productList = createAsyncThunk('product/fetch/getProducts', async(data) => {
    const response = await ProductService.productList({
        category_id:data.categoryId,
        subCategory_id:data.subCategoryId
    });
    return response.data;
})

export const addCart = createAsyncThunk('cart/cartItems', async(data) => {
    const response = await ProductService.addCart(data)
    // console.log("response:",response);
    return response.data;
})

export const buy = createAsyncThunk('cart/checkout', async (data) => {
    const response = await ProductService.buy(data)
    console.log("Response: ", response);
    return response.data;
})

export const remove = createAsyncThunk('cart/removeFromCart', async (data) => {
    console.log(remove(data))
    const response = await ProductService.remove(data)
    console.log("Response: ", response);
    return response.data;
})