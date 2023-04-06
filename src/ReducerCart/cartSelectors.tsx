import { CartState } from "./actions/types";

export const getCartItemsCount = (state: CartState): number => state.items.length

export const getCartTotal = (state: CartState): number => state.total