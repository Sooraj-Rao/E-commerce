import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./CartSlice";
import { wishListReducer } from "./WishListSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishList: wishListReducer
    }
});

export default store;
