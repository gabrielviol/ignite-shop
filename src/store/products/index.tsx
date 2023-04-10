
export default function reducer(state = setProducts, action) {
    switch (action.type){
        case SET_PRODUCTS:
            return action.products
        default:
            return state
    }
}

export const addProduct = product => {
    return{
        type: 'ADD_PRODUCT',
        product
    }
}

export const SET_PRODUCTS = 'SET_PRODUCTS'

export function setProducts(products){
    return{
        type: SET_PRODUCTS,
        products
    }
}