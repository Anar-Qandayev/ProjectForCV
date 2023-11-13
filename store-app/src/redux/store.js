import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice';
import addToCardReducer from './slices/addToCardSlice';
import addToBasketReducer from './slices/addToBasketSlice';

const store=configureStore({
    reducer:{
        counter:counterReducer,
        addToCard:addToCardReducer,
        basket:addToBasketReducer,
    },
});
export default store;