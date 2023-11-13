import {createSlice} from '@reduxjs/toolkit';

const addToBasketSlice=createSlice({
  name:"basket",
  initialState:[],
  reducers:{
    addToBasket:(state, action)=>{ 
     return (state = action.payload);
    },
    removeBasket:(state)=>{
      return state=[]
    },
    deleteToBasket:(state, action)=>{
      console.log(action.payload)
      return state.filter(item=>item.id!==action.payload);
    }
  },
});


export const {addToBasket,removeBasket,deleteToBasket}=addToBasketSlice.actions;
export default addToBasketSlice.reducer;