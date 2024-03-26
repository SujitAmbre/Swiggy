import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"searchfood",
    initialState:{searchFoodResult: ""},
    reducers: {
        storeSearchFoodResult: (state, action)=>{
            state.searchFoodResult = action.payload;
        }
    }
})
export const {storeSearchFoodResult} = searchSlice.actions;
export default searchSlice.reducer;