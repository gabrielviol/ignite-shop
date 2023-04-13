import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "..";

export interface ItemsProps {
    items: {
        id: string;
        name: string;
        imageUrl: string;
        price: number;
        description: string;
        defaultPriceId: string;
        quantatyItem: number;
    }[],
    totalQuantatyItem: number,
    amountItems: number
}

const initialState: ItemsProps = {
    items: [],
    totalQuantatyItem: 0,
    amountItems: 0,
}


export const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addOneItem(state, action) {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.items[itemIndex].quantatyItem++
            } else {
                const qntItems = { ...action.payload, quantatyItem: 1 }
                state.items.push(qntItems)
            }
            //localStorage.setItem("cartItems", JSON.stringify(state.items))
        },
        removeItem(state, action){
            const newState = state.items.filter(item => item.id !== action.payload.id )
            state.items = newState
        }
    },
})


export const { addOneItem, removeItem } = cart.actions
export const SelectCartState = (state: AppState) => state.cart
export default cart.reducer;