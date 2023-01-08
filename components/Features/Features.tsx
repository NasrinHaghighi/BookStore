import React, {useState, useEffect} from 'react'
import { fetchData } from '../../utiles';
import BookItem from '../BookItem/BookItem';

interface Props{
    title:string
}
export interface Item{
    id:number,
    volumeInfo:{
        title:string
    }

}

function Features(title: Props) {
    const [data, setData] =useState([])

    useEffect( () => {
      (fetchData(title).then(function(result){
        setData(result.items)
      }))
    }, [])

//console.log(data)
  return (
    <div>{data&& data.slice(0,5).map((item: Item)=>{
        return <BookItem key={item.id} item={item}/>
       
    })}</div>
  )
}

export default Features