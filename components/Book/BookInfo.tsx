import React,{useState} from 'react'
import {Item} from './Book'
import BookAllInfo from './BookAllInfo/BookAllInfo'
import {ConatinerInfo, Authors, Discription,Price, BtnConatiner,  Button, Input} from './styles'
import {addBook} from '../../features/bookSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

interface ItemProps{
    item:Item
    setShowAlert:any
}
function BookInfo({item, setShowAlert}:ItemProps) {
  const dispatch=useAppDispatch()
  const [amount, setAmount] =useState<number>(1)


  const addToCardHander=()=>{
    setShowAlert(true)
    dispatch(addBook({
      id:`${item.id}+${item.volumeInfo.title}`, 
      image:item.volumeInfo.imageLinks.thumbnail ,
      authors:item.volumeInfo.authors,
      amount:amount,
      price:item.volumeInfo.pageCount>0 ? item.volumeInfo.pageCount : 100
    }))
  }

  const amountHandel=(e:any)=>{
    setAmount(e.target.value)
  }
 
  return (
    <>
    <ConatinerInfo>

    <h1>{item.volumeInfo.title}</h1>
    <h2>{item.volumeInfo.subtitle}</h2>
    <Authors>
   
    {item.volumeInfo.authors?.map((item, i)=>{
        return <span> {item},{' '} </span>
    })}
    
    </Authors>  
    <Discription>
   
   {item.volumeInfo.description}
   
   </Discription> 

   <Price>
   
   {item.volumeInfo.pageCount>0 ? item.volumeInfo.pageCount : 100},00 e
   
   </Price> 
   <BtnConatiner>
  
    <Input type="number" placeholder='1' value={amount}  min="1" max='10' onChange={amountHandel}/>
    <Button onClick={addToCardHander}>Add to card</Button> 
   </BtnConatiner>
  
        </ConatinerInfo>
         
         </>
  )
}

export default BookInfo