import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name:"lang",
    initialState:{currentLang:"en"},
    reducers:{
        currentLanguageEvt:(state, action)=>{
            state.currentLang= action.payload;
        }
    }
})

export default languageSlice.reducer;
export const {currentLanguageEvt} = languageSlice.actions