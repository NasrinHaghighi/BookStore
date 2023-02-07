import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';


export const FlexConatiner=styled.div`
margin:0 auto ;
background-color:${props=>props.theme.grayBG} ;
width:100%;
padding:50px ;
`


export const Flex=styled.div`
  max-width: 1920px;
    margin:0 auto ;
    padding:0 50px ;

&>h2{
    font-weight:700 ;
    position:relative ;
    margin-bottom:30px ;
 &:after{
    content: " ";
    width: 30px;
    height: 3px;
    background-color:${props=>props.theme.orange} ;
    position: absolute;
    left: 0;
    bottom:-10px ;
 }   
}
`
export const ListConatiner=styled.div`


`

export const SwiperSlideStyled=styled(SwiperSlide)`
padding: 80px 30px;
display:flex ;

&:hover{
   &>div:first-child{
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
      transform: translateX(-30px);
} 
&>div:nth-child(3){
   box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
   transform: translate(-640px, -40px);
}
}
&>div:first-child{
   border:5px solid #fff ;
   border-radius:12px ;
   z-index:4;
   transition:all 0.3s ease-in-out ;
}
&>div:nth-child(2){
   border:5px solid #ffff;
   border-radius:12px ;
   z-index:3 ;
   transform: translate(-340px, -20px);
 
}
&>div:nth-child(3){
   border:5px solid #ffff ;
   border-radius:12px ;
   z-index:2 ;
   transform: translate(-670px, -40px);
}

`

// <div><Images src={item.image} width={350} height={400}   alt="book"/></div>