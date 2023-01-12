import React from 'react'
import {Container, Title} from './styles'
import {Item} from '../../Book'


interface ItemProps{
    item?:Item
  }


function Authores({item}:ItemProps) {
  return (
    <Container>
        <Title>Authores</Title>
        {item?.volumeInfo.authors ? item.volumeInfo.authors.map((a)=>{
return <h3>{a}</h3>
        }): ' '}
    </Container>
  )
}

export default Authores