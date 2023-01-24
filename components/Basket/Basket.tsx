import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import {BasketContainer, ShopItems} from './styles'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'



function Basket() {
    const dispatch=useAppDispatch()
  const books=useAppSelector(state=>state.books.books)
  console.log(books)
  return (
   
    <BasketContainer>
        
        <ShopItems>2</ShopItems>
         <FaShoppingCart />  
         </BasketContainer>
  )
}

export default Basket