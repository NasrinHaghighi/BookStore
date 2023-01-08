import React from 'react'
import { Item } from '../Features/Features'

interface ItemProps{
    item:Item
}
function BookItem({item}:ItemProps) {
  return (
    <div>{item.volumeInfo.title}</div>
  )
}

export default BookItem