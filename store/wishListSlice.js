import { createSlice } from "@reduxjs/toolkit";

export const wishList = createSlice({
    name: "wishList",
    initialState: {
        wishList: [],
    },
    reducers: {
        addToWish: (state, action) => {
            const item = state.wishList.find(
                (p) => p.id === action.payload.id
            );
            if (item) {
              (p) => p.id !== action.payload.id
            } else {
                state.wishList.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromWish: (state, action) => {
            state.wishList = state.wishList.filter(
                (p) => p.id !== action.payload.id
            );
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToWish, removeFromWish } = wishList.actions;

export default wishList.reducer;