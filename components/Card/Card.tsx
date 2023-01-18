import React from 'react'
import CardItem from './CardItem/CardItem'
import {Container,Titles} from './styles'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import EmptyCard from './Emptycard/EmptyCard'

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
      {books.length>0 ? books.map((item, index)=>{
        return <CardItem item={item} index={index}/>
      }): <EmptyCard />}

    </Container>
  )
}

export default Card