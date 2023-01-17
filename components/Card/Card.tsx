import React from 'react'
import CardItem from './CardItem/CardItem'
import {Container,Titles} from './styles'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

function Card() {
  const dispatch=useAppDispatch()
  const books=useAppSelector(state=>state.books.books)
  console.log(books)
  return (
    <Container>
      <Titles>
      <span></span> 
       <span></span> 
        <span>Product</span>
        <span>Price</span>
        <span>Amount</span>
        <span>Total price</span>
      </Titles>
      {books && books.map((item, index)=>{
        return <CardItem item={item} index={index}/>
      })}

    </Container>
  )
}

export default Card