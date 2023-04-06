import { Item } from "./actions/types";

export const calculateTotalPrice = (items: Item[]): number => 
    items.reduce((total, item) => total + item.price, 0)