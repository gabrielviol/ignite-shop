import { Action, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import { createWrapper } from "next-redux-wrapper"
import reducers from "./reducers"
import { product } from "./products";
import { ThunkAction, configureStore } from "@reduxjs/toolkit"

const makeStore = () => 
  configureStore({
    reducer: {
      [product.name] : product.reducer,
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


