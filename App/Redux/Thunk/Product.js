import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from "../../Services/Product";
import Toast from 'react-native-simple-toast';

export const category = createAsyncThunk('product/fetch/getCategories', async () => {
    const response = await ProductService.category();
    return response.result;
})

export const subCategory = createAsyncThunk('product/fetch/getSubCategories', async (data) => {
    const response = await ProductService.subCategory({ category_id: data });
    // console.log("response:", response);
    return response.data;
})

export const productList = createAsyncThunk('product/fetch/getProducts', async (data) => {
    const response = await ProductService.productList({
        category_id: data.categoryId,
        subCategory_id: data.subCategoryId
    });
    return response.data;
})



export const addCart = createAsyncThunk('cart/addToCart', async (data) => {

    const response = await ProductService.addCart({
        product_id: data
    })
        .catch(err => {
            console.log('dddd>>', err)
        })
    // console.log("response>>>>:",response);
    Toast.show(`${response.message}`, Toast.SHORT, Toast.BOTTOM);
    return response.data;
})

export const fetchCart = createAsyncThunk('cart/cartItems', async () => {
    const response = await ProductService.fetchCart()
    // console.log("get carttt>>>>>>>>",response);
    return response.data;
})

export const buy = createAsyncThunk('cart/checkout', async (data) => {
    const response = await ProductService.buy(data)
    // console.log("Response: ", response);
    return response.data;
})

export const quantityChange = createAsyncThunk('cart/changeItemQuantity', async (data) => {
    try {

        const response = await ProductService.quantityChange({
            cart_id: data.cart_id,
            quantity: data.quantity
        });
        // console.log("Response from service:", response);
        Toast.show(`${response.message}`, Toast.SHORT, Toast.BOTTOM);
        return data;
    } catch (error) {
        console.error("Error in quantityChange ", error);
        // Handle error or throw it further
        throw error;
    }
})

export const remove = createAsyncThunk('cart/removeFromCart', async (data) => {
    // console.log(remove(data))
    const response = await ProductService.remove({ product_id: data })
    // console.log("Response: ", response);
    Toast.show(`${response.message}`, Toast.SHORT, Toast.BOTTOM);
    return data;
})