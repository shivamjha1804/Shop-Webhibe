import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from "../../Services/Product";

export const category = createAsyncThunk('product/fetch/getCategories', async() => {
    const response = await ProductService.category();
    return response.data;
})