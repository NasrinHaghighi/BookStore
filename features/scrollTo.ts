import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Props{
   tag:string
 }

const initialState:Props={
    tag:''
}

export const ScrollToSlice= createSlice({
    name:'ScrollTo',
    initialState,
    reducers:{
        selectedScroll:(state, action:PayloadAction<any>)=>{
         state.tag=action.payload
        },
 
    }
})

export const {selectedScroll} =ScrollToSlice.actions
export default ScrollToSlice.reducer