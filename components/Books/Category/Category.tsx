import React,{useEffect, useState} from 'react'
import { fetchData } from '../../../utiles';
import {Conatiner, Title, CategoryList, CategoryItem} from './styles'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { selectedcategory } from '../../../features/CategorySlice'

const category=[
    {tit:'Art', value :'art'},
    {tit:'Economy', value :'economy'},
    {tit:'Success', value :'success'},
]
function Category() {
const[title, setTitle]=useState('')


const handelSelectcategory=(value:string)=>{
        setTitle(value)
        dispatch(selectedcategory(value))
 }
     
const dispatch=useAppDispatch()

   
  return (
    <>
    <Conatiner>
    <Title>Category</Title>
    <CategoryList>
    {category.map((item)=>{
        return <CategoryItem key={item.tit} onClick={()=>handelSelectcategory(item.value)}>{item.tit}</CategoryItem>
    })}
   </CategoryList>
   </Conatiner>
    </>
  )
}

export default Category