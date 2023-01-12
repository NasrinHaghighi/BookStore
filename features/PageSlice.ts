import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Props{
    page:number
 }
const initialState:Props ={
    page:1
}

export const CategorySlice= createSlice({
    name:'Page',
    initialState,
    reducers:{
        selectedPage:(state, action:PayloadAction<number>)=>{
         
        },
 
    }
})

export const {selectedPage} =CategorySlice.actions
export default CategorySlice.reducer