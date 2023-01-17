
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Book from "../components/Book/Book";
import { Books } from "../constants/MOCK_DATA";


interface Book{
   id:string,
   image:string,
   amount:number,
   authors:string[],
   price:number

}
interface Books{
    books:Book[]
}
// interface AmountProps{
//    item:Book,
//    newAmount:number,
// }
const initialState:Books={
    books:[]
}

export const BookSlice= createSlice({
    name:'Books',
    initialState,
    reducers:{
        addBook:(state, action:PayloadAction<Book>)=>{
      let tempo=state.books.find((b)=>b.id === action.payload.id)
        if(tempo){
            let tempcard=state.books.map((b)=>{
                if(b.id === action.payload.id){
                    return {...b, amount:Number(b.amount) +Number(action.payload.amount) }
                }else{
                    return {...b}
                }
                            })
                            state.books=tempcard
        }   else{
            state.books.push(action.payload)
        }
         

        },
        addNewAmount:(state, action:PayloadAction<any>)=>{
           console.log(action.payload)
      
              },
    },
  
})

export const {addBook, addNewAmount} =BookSlice.actions
export default BookSlice.reducer