import React from 'react'
import {Item} from '../Book'
import {Container, Trow, FirstCol, SecondCol} from './styles'
import Link from 'next/link'

interface ItemProps{
    item?:Item
  }

function Specific({item}:ItemProps) {
  return (
    <Container>
         
         <Trow>
        <FirstCol>Size</FirstCol>
        <SecondCol>Legnth: 30 cm , Width: 20 cm,  Height: 1.5 cm</SecondCol>
          </Trow>

       <Trow>
        <FirstCol>Weight</FirstCol>
        <SecondCol>{item?.volumeInfo.pageCount} gr</SecondCol>
          </Trow>

          <Trow>
        <FirstCol>Material</FirstCol>
        <SecondCol>Glazed Hand Painting on Copper Dish</SecondCol>
          </Trow>

          <Trow>
        <FirstCol>previewLink</FirstCol>
        <SecondCol>
            {item?.volumeInfo.previewLink ?
              <Link href={item?.volumeInfo.previewLink}>
              For more information see the 
             </Link>
            : 'PreviewLink is not availeble'}
      
             </SecondCol>
          </Trow>

          <Trow>
        <FirstCol>Model</FirstCol>
        <SecondCol>SetLux6660621</SecondCol>
          </Trow>
  
 
    </Container>
  )
}

export default Specific