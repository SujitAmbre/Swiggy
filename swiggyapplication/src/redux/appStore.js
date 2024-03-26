import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import collectionsSlice from "./collectionsSlice";
const appStore = configureStore({
    reducer: {
        foodSearch: searchSlice,
        collectionFilterStore:collectionsSlice
    },
})
export default appStore;