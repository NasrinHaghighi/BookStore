import React ,{useState, useEffect,useRef}from 'react'
import {Container} from './styles'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SliderItem from './SliderItem/SliderItem';
import { before, beforeEach } from 'node:test';



const arr=[1,2,3,4,5]

function SliderCo() {
    const sliderRef = useRef();
   
    const [active, setActive] =useState(0)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
 
       
        afterChange:(current:any)=>setActive(current)
         //beforeChange: () =>setActive(true)
          //setActive(active+1),
        //  beforeChange: () =>
        //  setActive(),
      };
   
  return (
    <Container>
 <Slider {...settings}>
          {arr.map((item, index)=>{
            return <SliderItem item={item} index={index} active={active}/>
          })}
        </Slider>
    </Container>
  )
}

export default SliderCo