import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";


export const fetchOfferData = createAsyncThunk(
    'offerceListing',
    async()=>{
        const response = await fetch('https://www.swiggy.com/api/seo/getListing?lat=18.61610&lng=73.72860');
        return await response.json();
    }

)

const offerSlice = createSlice({
    name:"offers",
    initialState:{data:[],loading:""},
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchOfferData.pending,(state)=>{          
            state.loading="loading";
        });
        builder.addCase(fetchOfferData.fulfilled,(state,action)=>{                   
            state.loading="";
            state.data=action.payload;
        });
        builder.addCase(fetchOfferData.rejected,(state)=>{            
            state.loading="";
        })
    }
})
export default offerSlice.reducer;