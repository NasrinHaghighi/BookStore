import React, {useState, useEffect} from 'react'
import { fetchFeatures} from '../../utiles';

import {Flex, ListConatiner, FlexConatiner, SwiperSlideStyled} from './styles'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Images } from "../../helpers/Image";
import { Books } from "../../constants/MOCK_DATA";
// Import Swiper styles
import 'swiper/css';



export interface Item{
    id:string,
    etag:string,
    volumeInfo:{
      description:string,
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

function Features({ title }: { title: string }) {
  const [data, setdata] =useState<any>([])
  function sliceIntoChunks(arr:any, chunkSize:number) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}

useEffect(()=>{
 var newArr =sliceIntoChunks(Books, 3)
setdata(newArr)
},[])
 
console.log(data)
  return (
    <FlexConatiner >
      <Flex>
        <h2>Featured Books</h2>
   <ListConatiner>

   <Swiper
      spaceBetween={50}
      slidesPerView={3.8}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data?.map((item:[])=>{
        
return  <SwiperSlideStyled>
  {item.map((m:any)=>{
    return <div><Images src={m.image} width={350} height={400}   alt="book"/></div>
  })}

</SwiperSlideStyled>
      })}

    </Swiper>
    </ListConatiner>
    </Flex>
    </FlexConatiner>
  )
}



export default Features