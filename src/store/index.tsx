import { combineReducers, legacy_createStore } from "redux"
import productsReducer from "./products"

const rootReducer = combineReducers({
  products : productsReducer
})

export default legacy_createStore(rootReducer)