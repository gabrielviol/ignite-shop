import { GetStaticProps } from "next"
import { stripe } from "../../lib/stripe"
import Stripe from "stripe"
import { AppState, wrapper } from '../../store'
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export interface HomeProps {
    products: {
      id: string;
      name: string;
      imageUrl: string;
      price: string;
    }[]
  }

const initialState: HomeProps = {
    products: [
        {
            id: 'string',
            name: 'string',
            imageUrl: 'string',
            price: 'string'
        },
        {
            id: 'string',
            name: 'string',
            imageUrl: 'string',
            price: 'string'
        }
]
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

