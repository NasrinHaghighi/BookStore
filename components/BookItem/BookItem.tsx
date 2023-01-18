import React from 'react'
import {BookItemContainer,Tit} from './styles'
import {Item} from '../Features/Features'
import {Images} from '../../helpers/Image'
import Link from 'next/link'

interface ItemProps{
    item:Item
}
function BookItem({item}:ItemProps) {
  return (
    <BookItemContainer>
       <Link href={`/books/${item.id}+${item.volumeInfo.title}`}>
           <Images src={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : ''} width={180} height={200}   alt="book"/>
          <Tit>{item.volumeInfo.title}</Tit>
         <h5>{item.volumeInfo.authors? item.volumeInfo.authors[0]: ''}</h5>  
       <h4>{item.volumeInfo.pageCount> 0 ? item.volumeInfo.pageCount : 100 }, 00 e</h4>
       </Link>

    </BookItemContainer>
  )
}

export default BookItem