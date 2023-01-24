import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Props{
    search:string
 }
const initialState:Props ={
    search:''
}

export const SearchSlice= createSlice({
    name:'Search',
    initialState,
    reducers:{
        selectedSearch:(state, action:PayloadAction<string>)=>{
          state.search =action.payload
          console.log(action.payload)
        },
 
    }
})

export const {selectedSearch} =SearchSlice.actions
export default SearchSlice.reducer