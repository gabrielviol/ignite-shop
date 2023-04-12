import { createSlice } from "@reduxjs/toolkit";
import { HomeProps } from "../../pages";

const initialState: HomeProps = {
    products: []
}

export const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart(state, action){
            state.products = action.payload
        },
    }  
})