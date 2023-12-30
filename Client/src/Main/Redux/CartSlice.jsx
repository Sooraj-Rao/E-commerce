import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart(state, action) {
            state.items.push(action.payload);
        },
    },
});

export const { addToCart } = cartSlice.actions;//for Usage
export const cartReducer = cartSlice.reducer;//for Store
