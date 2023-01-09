import React,{useEffect, useState} from 'react'
import { fetchData } from '../../../utiles';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { selectedcategory } from '../../../features/CategorySlice'
import BookItem from '../../BookItem/BookItem';
import {BooksConatiner} from './styles'
function Main() {
    const [loading, setLoading]=useState<boolean>(false)
    const [data, setData] =useState([])
    const dispatch=useAppDispatch()
    const category = useAppSelector(state=>state.category.category)


   
   useEffect( () => {
    setLoading(true);
      (fetchData(category).then(function(result){
        setData(result.items)
      }))
      setLoading(false);
    }, [category])
   console.log(data)
  return (
    <BooksConatiner>
         {data && !loading ? data.map((item)=>{
            return <BookItem item={item} />
        }) :<p>loading...</p>} 
    </BooksConatiner>
  )
}

export default Main