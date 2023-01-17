import React ,{useState}from 'react'

import {CardItemContainer, Trash,Name,Price,  Amount, TotalPrice, BookPhoto } from './styles'
import { FaTrashAlt } from "react-icons/fa";
import { Images } from '../../../helpers/Image';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import {addNewAmount} from '../../../features/bookSlice'

interface CardItem{
  id:string,
  image:string,
  authors:string[],
 amount:number,
 price:number
}
interface Item{
  item:CardItem,
  index:number
}


function CardItem({item, index}:Item) {
const [newAmount, setNewAmount] =useState<number>(item.amount)
const dispatch=useAppDispatch()
const tit=item.id.slice(item.id.indexOf('+'))
const name=tit.slice(1)

//cahnge the maonut in redux by on chang event//
const newAmountHandel=(e:any)=>{
  setNewAmount(e.target.value)
 dispatch(addNewAmount({...item, amount:e.target.value}))
 
}
//console.log(newAmount)
  return (
    <CardItemContainer className={index % 2 == 1 ? 'even' : ''}>
        <Trash><FaTrashAlt /></Trash>
        <BookPhoto>
        <Images
        width={60}
        height={82}
        src={item.image}
        alt="book"
       />
        </BookPhoto>
        <Name>{name}</Name>
        <Price>{item.price},00 e</Price>
        
        <Amount type="number" min="1" max='10' value={newAmount} onChange={newAmountHandel}/>
        
        <TotalPrice>{item.amount*item.price},00 e</TotalPrice>
    </CardItemContainer>
  )
}

export default CardItem