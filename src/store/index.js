import { combineReducers, configureStore } from "@reduxjs/toolkit";
import HomeSlice from "../reducer/HomeSlice";
const rootReducer = combineReducers({
  HomeSlice,
});

const store = configureStore({
  reducer: { rootReducer },
});

export default store;
