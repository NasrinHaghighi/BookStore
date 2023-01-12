import React ,{useEffect, useState} from 'react'
import {Container, ImageDiv} from './styles'
import { useRouter } from 'next/router'
import { fetchitem } from '../../utiles';
import { Images } from '../../helpers/Image'
import BookInfo from './BookInfo';
import BookAllInfo from './BookAllInfo/BookAllInfo';

export interface Item{
    id:string,
    etag:string,
    volumeInfo:{
      previewLink?:string,
      description:string,
      pageCount:number,
        title?:string,
        subtitle:string,
        authors:string[],
        categories?:string[]
        imageLinks:{
            smallThumbnail:string,
            thumbnail:string
        }
          
    }
}

function Book() {
    const router = useRouter()
    const t=router.query.bookid
    const id = t?.slice(0, t.indexOf('+'))
    var an = t?.slice(t.indexOf('+'));
   console.log(id)
   
  const ans=an?.slice(1)
   const [loading , setLoading] =useState(false)
   const [item, setItem] =useState<Item>()

       useEffect(()=>{
          setLoading(true)
         fetchitem(id as string).then(function(result){
       const data=result.items
       console.log(data)
     const tt= data.find((t:any)=>{
        return t.volumeInfo.title = ans
      })
     setItem(tt)
         })
        setLoading(false)
    },[])

  return (
    <>
    <Container>
      <ImageDiv>
       {item && !loading ? 
         <Images
        width={344}
        height={378}
        src={item.volumeInfo.imageLinks.thumbnail}
        alt="products"
       />
 
       
       :<p>Image of book is not availeble</p>}</ImageDiv>

     {item && !loading ? <BookInfo item={item}/> : ''}
    </Container>
    <BookAllInfo item={item}/>
    </>
  )
}

export default Book