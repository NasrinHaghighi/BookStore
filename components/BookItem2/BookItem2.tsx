import React from 'react'
import {BookItem2Container} from './styles'
import {Item} from '../Features/Features'
import Link from 'next/link'
import {Images} from '../../helpers/Image'


interface ItemProps{
    item:Item
}
function BookItem2({item}:ItemProps) {
  return (
    <BookItem2Container>
          <Link href={`/books/${item.id}+${item.volumeInfo.title}`}>
           <Images src={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : ''} width={250} height={300}   alt="book"/>
           <div>
          <h4>{item.volumeInfo.title}</h4>
         <h5>{item.volumeInfo.authors? item.volumeInfo.authors[0]: ''}</h5>  
       <h4>{item.volumeInfo.pageCount> 0 ? item.volumeInfo.pageCount : 100 }, 00 e</h4>
       </div>
       </Link>
    </BookItem2Container>
  )
}

export default BookItem2