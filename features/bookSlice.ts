
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Book from "../components/Book/Book";
import { Books } from "../constants/MOCK_DATA";


interface Book{
   id:string,
   image:string,
   amount:number,
   authors:string[]

}
interface Books{
    books:Book[]
}
const initialState:Books={
    books:[]
}

export const BookSlice= createSlice({
    name:'Books',
    initialState,
    reducers:{
        addBook:(state, action:PayloadAction<Book>)=>{
          if(state.books.length>0){
            let temp=state.books.find(b=>console.log(b.id))
            if(temp){
                console.log(action.payload.id +'temp is not undefind')
            }else{
                console.log(action.payload.id+ 'is undefind')
            }
          }else{
           
           console.log(action.payload.id+'avalin')
           state.books.push(action.payload)
          }
            
        //console.log(action.payload.id)

        //  if(temp){
        //     state.books.find((item)=>{
        //         return {...item, amount:'50'}
        //       })
        //  }else{
        //     state.books.push(action.payload)
        //  }
        },
 
    }
})

export const {addBook} =BookSlice.actions
export default BookSlice.reducer