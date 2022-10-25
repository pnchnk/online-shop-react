import { createSlice } from "@reduxjs/toolkit";
import productsApi from "../api/products";

const initialState = {
    products: [],
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder.addMatcher(
            productsApi.endpoints.getAllProducts.matchFulfilled,
            (state, { payload }) => {
                state.products = payload;             
            }
        );
    },
});

// export const { addproducts, deletePost, markPost } = productsSlice.actions;

export default productsSlice.reducer;