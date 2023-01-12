import React from 'react'
import { Item } from '../Features/Features'
import {BookItemContainer, ImageDiv} from './styles'
import { Images } from '../../helpers/Image'
import Link from 'next/link'
//import Image from 'next/image'

interface ItemProps{
    item:Item
}

function BookItem({item}:ItemProps) {
   //console.log(item.id)
  return (
    <BookItemContainer >
      <Link href={`/books/${item.id}+${item.volumeInfo.title}`}>
          <ImageDiv > <Images src={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : ''} width={180} height={200}   alt="book"/></ImageDiv>
          <h4>{item.volumeInfo.title}</h4>
         <h5>{item.volumeInfo.authors? item.volumeInfo.authors[0]: ''}</h5>  
       <h4>{item.volumeInfo.pageCount> 0 ? item.volumeInfo.pageCount : 100 }, 00 e</h4>
       </Link>
    </BookItemContainer>
  )
}

export default BookItem