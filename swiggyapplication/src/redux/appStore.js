import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import collectionsSlice from "./collectionsSlice";
import cartSlice from "./cartSlice";
const appStore = configureStore({
    reducer: {
        foodSearch: searchSlice,
        collectionFilterStore:collectionsSlice,
        cartData:cartSlice
    },
})
export default appStore;