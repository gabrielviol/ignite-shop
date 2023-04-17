import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "..";
import { stat } from "fs";

export interface ItemsProps {
    items: {
        id: string;
        name: string;
        imageUrl: string;
        price: string;
        description: string;
        defaultPriceId: string;
        quantatyItem: number;
    }[],
    totalQuantatyItem: number,
    amountItems: string
}

const initialState: ItemsProps = {
    items: [],
    totalQuantatyItem: 0,
    amountItems: '0',
}

export const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addOneItem(state, action){
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id)
            state.totalQuantatyItem ++
            if (itemIndex >= 0) {
                state.items[itemIndex].quantatyItem++
            } else {
                const qntItems = { ...action.payload, quantatyItem: 1 }
                state.items.push(qntItems)
            }
            //localStorage.setItem("cartItems", JSON.stringify(state.items))
        },
        removeItem(state, action){
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id)
            const newState = state.items.filter(item => item.id !== action.payload.id )
            state.totalQuantatyItem -= state.items[itemIndex].quantatyItem
            state.items = newState
        },
        decrementItem(state, action){
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id)
            const newState = state.items.filter(item => item.id !== action.payload.id ) 
            state.items[itemIndex].quantatyItem > 1 
            ? state.items[itemIndex].quantatyItem-- 
            : state.items = newState
            state.totalQuantatyItem --
        },
        amountTotal(state, action){
            let {total, quantity} = state.items.reduce((cartTotal, cartItem) => {
                const { price, quantatyItem } = cartItem
                const itemTotal = quantatyItem * (parseFloat(price.replace(/[^\d,]/g, '').
                replace(',', '.')))
                cartTotal.total += itemTotal
                cartTotal.quantity += quantatyItem
                return cartTotal
            }, {
                total: 0,
                quantity: 0
            })
            state.amountItems = (total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            state.totalQuantatyItem = quantity
        }
    },
})

export const { addOneItem, removeItem, decrementItem, amountTotal } = cart.actions
export const SelectCartState = (state: AppState) => state.cart
export default cart.reducer;