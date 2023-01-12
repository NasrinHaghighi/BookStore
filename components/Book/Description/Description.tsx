import React from 'react'
import {Item} from '../Book'
import {Tit, Text, Category, Cate} from './styles'
interface ItemProps{
    item?:Item
  }

  
function Description({item}:ItemProps) {
    console.log(item)
  return (
    <>
    <Tit>About book "{item?.volumeInfo.title}"</Tit>
    <Cate>Category :<Category> {item?.volumeInfo.categories}</Category></Cate>

    <Text>{item?.volumeInfo.description}</Text>

    </>
  )
}

export default Description