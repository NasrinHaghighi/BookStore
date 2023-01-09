
import { useAppDispatch, useAppSelector } from './redux/hooks'
export const fetchData =async (title:string)=>{
 
    //const {difficulty, category, number}=start
    const url=`https://www.googleapis.com/books/v1/volumes?q=${title}&key=AIzaSyDIvkAJdlocEzN72lwKjgR0tF76FGRpp98&maxResults=16`
    const data= await fetch(url)
    const res=await data.json()
    console.log(res)
     return res
     
     } 