import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cartSliceName",
    initialState:{cartData:[]},
    reducers: {
        cartDataReducer:(state, action) => {
            state.cartData.push(action.payload);
        }
    }
})
export default cartSlice.reducer;
export const {cartDataReducer} = cartSlice.actions;