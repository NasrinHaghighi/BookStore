import React from 'react'
import { Item } from '../Features/Features'
import {BookItemContainer} from './styles'
import { Images } from '../../helpers/Image'
//import Image from 'next/image'

interface ItemProps{
    item:Item
}

function BookItem({item}:ItemProps) {
   // console.log(item.volumeInfo)
  return (
    <BookItemContainer >
          <span> <Images src={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : ''} width={300} height={250}   alt="book"/></span>
          <h4>{item.volumeInfo.title}</h4>
         <h5>{item.volumeInfo.authors? item.volumeInfo.authors[0]: ''}</h5>  
       <h4>{item.volumeInfo.pageCount}, 00 e</h4>
    </BookItemContainer>
  )
}

export default BookItem