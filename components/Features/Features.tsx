import React, {useState, useEffect} from 'react'
import { fetchData } from '../../utiles';
import BookItem from '../BookItem/BookItem';
import {Flex, ListConatiner, FlexConatiner} from './styles'




export interface Item{
    id:number,

    volumeInfo:{
      pageCount:number,
        title:string,
        subtitle:string,
        authors:string[],
        categort:string[]
        imageLinks:{
            smallThumbnail:string,
            thumbnail:string
        }

                
    }

}

function Features(title: string) {
    const [data, setData] =useState([])

    useEffect( () => {
      (fetchData(title).then(function(result){
        setData(result.items)
      }))
    }, [])

console.log(data)
  return (
    <FlexConatiner>
      <Flex>
        <h2>Art</h2>
       <ListConatiner>
    
        {data&& data.slice(0,5).map((item: Item)=>{
        return <BookItem key={item.id} item={item}/>          
    })}
    </ListConatiner>
    </Flex>
    </FlexConatiner>
  )
}

export default Features