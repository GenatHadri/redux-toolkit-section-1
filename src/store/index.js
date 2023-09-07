import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../store/counter";
import AuthReducer from "../store/auth";

const store = configureStore({
  // reducer: counterSlice.reducer, // This is the usage when we have one reducer
  reducer: { counter: CounterReducer, auth: AuthReducer }, // This is the usage when we have multiple reducers, in the background the configureStore will merge all those reducers into one main/big reducer
});

export default store;
