import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "..";
  
export interface ItemsProps {
    items: {
        id: string;
        name: string;
        imageUrl: string;
        price: string;
        description: string;
        defaultPriceId: string;
    }[]
  }

const initialState: ItemsProps = {
    items: []
}


export const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addOneItem(state, action) {
            state = state.items.push(action.payload)
        },
        incrementItem(state, action){
            state.items.find(id => (console.log(id)))
        }
    },
})

export const { addOneItem, incrementItem } = cart.actions
export const SelectCartState = (state: AppState) => state.cart
export default cart.reducer;