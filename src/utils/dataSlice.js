import { createSlice } from "@reduxjs/toolkit";

const dataSlice=createSlice({
    name:'data',
    initialState:{
        value:""
    },
    reducers:{
        changeData(state,action){
            state.value=action.payload
        }
    }
});
export const{changeData}=dataSlice.actions;
export default dataSlice.reducer;