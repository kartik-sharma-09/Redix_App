import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterSlice";
import authReducer from "./auth";

const store = configureStore({
  reducer: { counter: CounterReducer, auth: authReducer }, // .reducer is for reducers object line no.8
});

export default store;
