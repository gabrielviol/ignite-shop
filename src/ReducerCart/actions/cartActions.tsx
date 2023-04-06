import { Item } from "./types";


export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const addToCart = (items: Item) => ({
  type: 'ADD_TO_CART',
  payload: items,
});

export const removeFromCart = (itemId: string) => ({
  type: 'REMOVE_FROM_CART',
  payload: itemId,
});
