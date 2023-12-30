import { createSlice } from "@reduxjs/toolkit";

const WishSlice = createSlice({
    name: 'wishList',
    initialState: {
        items: [],
    },
    reducers: {
        addToWishList(state, action) {
            state.items.push(action.payload);
        },
    },
});

export const { addToWishList } = WishSlice.actions;
export const wishListReducer = WishSlice.reducer;
