
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Props{
    category:string
 }
const initialState:Props ={
    category:'art'
}

export const CategorySlice= createSlice({
    name:'Category',
    initialState,
    reducers:{
        selectedcategory:(state, action:PayloadAction<string>)=>{
          state.category =action.payload
          console.log(action.payload)
        },
 
    }
})

export const {selectedcategory} =CategorySlice.actions
export default CategorySlice.reducer