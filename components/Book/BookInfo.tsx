import React from 'react'
import {Item} from './Book'
import BookAllInfo from './BookAllInfo/BookAllInfo'
import {ConatinerInfo, Authors, Discription,Price, BtnConatiner,  Button, Input} from './styles'

interface ItemProps{
    item:Item
}
function BookInfo({item}:ItemProps) {
  return (
    <>
    <ConatinerInfo>

    <h1>{item.volumeInfo.title}</h1>
    <h2>{item.volumeInfo.subtitle}</h2>
    <Authors>
   
    {item.volumeInfo.authors.map((item, i)=>{
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
  
    <Input type="number" placeholder='1'   min="1" max='10'/>
    <Button>Add to card</Button> 
   </BtnConatiner>
  
        </ConatinerInfo>
         
         </>
  )
}

export default BookInfo