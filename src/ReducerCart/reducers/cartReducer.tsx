import { CartActionTypes, CartState } from "../actions/types";

const initialState: CartState = {
    items: [],
    total: 0
}

const cartReducer = (state = initialState, action: CartActionTypes): CartState => {
    switch(action.type){
        case 'ADD_TO_CART':
            return{
                ...state,
                items: [...state.items, action.payload],
                total: state.total + action.payload.price
            }
        case 'REMOVE_FROM_CART':
            const index = state.items.findIndex((item) => item.id === action.payload )
            const newItems = [...state.items]
            newItems.splice(index, 1)
            return{
                ...state,
                items: newItems,
                total: state.total - state.items[index].price,
            }
        default:
            return state
    }
}

export default cartReducer