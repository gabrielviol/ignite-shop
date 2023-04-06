export interface Item {
    id: number,
    name: string,
    price: number,    
}

export interface CartState {
    items: Item[];
    total: number;
}

interface AddToCartAction {
    type: 'ADD_TO_CART';
    payload: Item;
}

interface RemoveFromCartAction {
    type: 'REMOVE_FROM_CART';
    payload: number;
}

export type CartActionTypes = AddToCartAction | RemoveFromCartAction;
  