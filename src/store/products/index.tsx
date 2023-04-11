import { AppState } from '../../store'
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { HomeProps } from "../../pages";

const initialState: HomeProps = {
    products: []
}

export const product = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts(state, action) {
            state.products = action.payload
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.product,
            }
        }
    }
})

export const { setProducts } = product.actions
export const selectProductsState = (state: AppState) => state.product.products;
export default product.reducer;

