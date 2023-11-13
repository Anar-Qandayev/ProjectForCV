import {createSlice} from '@reduxjs/toolkit';

const addToCardSlice=createSlice({
  name:"addToCard",
  initialState:0,
  reducers:{
    addToCard:(state)=>state+1,
    removeCard:(state)=>state=0,
  },
})


export const {addToCard,removeCard}=addToCardSlice.actions;
export default addToCardSlice.reducer;