import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import collectionsSlice from "./collectionsSlice";
import cartSlice from "./cartSlice";
import offerceSlice from "./offerceSlice";
import languageSlice, { currentLanguageEvt } from "./languageSlice";
const appStore = configureStore({
    reducer: {
        foodSearch: searchSlice,
        collectionFilterStore:collectionsSlice,
        cartData:cartSlice,
        offerData:offerceSlice,
        currentLangName:languageSlice
    },
})
export default appStore;