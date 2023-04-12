import { Action } from "redux"
import { createWrapper } from "next-redux-wrapper"
import { product } from "./products";
import { ThunkAction, configureStore } from "@reduxjs/toolkit"
import { cart } from "./cart";

const makeStore = () => 
  configureStore({
    reducer: {
      [product.name] : product.reducer,
      [cart.name] : cart.reducer,
    },
    devTools: true
  })

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);


