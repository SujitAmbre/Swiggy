import { createSlice } from "@reduxjs/toolkit";

const collectionsSlice = createSlice({
    name:'collections',
    initialState:{collectionFilterDataList:'', hotelDataList:''},
    reducers: {
        collectionFilterData:(state, action)=>{
            state.collectionFilterDataList = action.payload
        },
        collectionHotelData:(state, action)=>{
            state.hotelDataList = action.payload
        }
    }

})
export const {collectionFilterData, collectionHotelData} = collectionsSlice.actions;
export default collectionsSlice.reducer;