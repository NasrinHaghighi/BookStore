import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Props{
   price:number[]
 }

const initialState:Props={
    price:[20,1000]
}

export const PriceFilter= createSlice({
    name:'Price',
    initialState,
    reducers:{
        selectedPrice:(state, action:PayloadAction<any>)=>{
         state.price=action.payload
        },
 
    }
})

export const {selectedPrice} =PriceFilter.actions
export default PriceFilter.reducer