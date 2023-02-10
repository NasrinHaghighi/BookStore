import styled from "styled-components";

export const Conatiner=styled.div`
max-width: 100%;
 margin:0 auto ;
`
export const InnerConatiner=styled.div`
max-width: 1920px;
 margin:0 auto ;
 padding:100px 50px ;


`
export const Title=styled.div`
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
export const Top=styled.div`
    display:flex ;
    justify-content:space-between ;
    align-items:center ;
  
   

`
export const Tabs=styled.div`

display:flex ;
justify-content:flex-end ;
    
&>div{
    font-size: 20px;
    margin-right:30px ;
    font-weight:700 ;
    color:${props=>props.theme.orange};
    transition:all 0.3s ease-in-out ;
    &.active{
        border-bottom:2px solid ${props=>props.theme.orange}
    }
}
`
export const Main=styled.div`
display: grid;
grid-template-columns: 1.75fr 3fr;
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
margin:30px 0 ;
`

export const Image=styled.div`
padding:70px 20px ;
text-align:center;
`
export const Text=styled.div`
font-size:3.5rem ;
line-height:3rem ;
margin-top:30px ;
&>p{
    &.sale{
color:${props=>props.theme.lightRed}
    }
    &.over{
        font-size:1.875rem; 
        color:${props=>props.theme.mainTextColor}
    }
}
`
export const SeeMore=styled.button`
border:none;

width:150px ;
height:50px ;
font-size:18px ;
border-radius:8px ;
background-color:${props=>props.theme.orange} ;


`

export const Banner=styled.div`
transition:all 0.3s ease-in-out ;
`


export const Content=styled.div`
padding:20px ;
display:grid;
height:100% ;
grid-template-rows:repeat(6,1fr) ;
grid-template-columns:repeat(5, 1fr) ;
grid-gap:20px ;



`
export const ShopLink=styled.div`
position:absolute ;
left: 0;
top: 0;
width: 100%;
height: 100%;
text-align:center;
background-color: rgba(255, 165, 0, 0.5);
visibility:hidden ;
&>p{
   font-size:24px ;
   font-weight:700 ;
   padding-top:30px ;
   color:${props=>props.theme.textStrong};
   width:100% ;
   height:30px ;
}
`

export const GridItem=styled.div<{
    bgImage: string;
   
  }>`
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
background-repeat: no-repeat;
background-size:100% 100%;
background-position: center; 
position:relative;
 
&:hover{
    ${ShopLink}{
        visibility:visible ;
    }
}

&.c0{
    grid-row: span 2;
grid-column: span 2;  
}
&.c1{
grid-row: span 3;
grid-column: span 3;
}
&.c2{
    grid-row: span 2 ;
grid-column: span 2;
}
&.c3{
    grid-row: span 1;
    grid-column: span 1;
}
&.c4{
    grid-row: span 3;
    grid-column: span 2;
}
&.c5{
    grid-row: span 2;
    grid-column: span 3;
}


&.box0{
    grid-row: span 3;
grid-column: span 2 ;  
}
&.box1{
    grid-row: span 2;
grid-column: span 3 ;  
}
&.box2{
    grid-row: span 2;
grid-column: span 1 ;  
}
&.box3{
    grid-row: span 4;
grid-column: span 2 ;  
}
&.box4{
    grid-row: span 4;
grid-column: span 2 ;  
}
&.box5{
    grid-row: span 3;
grid-column: span 1 ;  
}
`

/**second content 
 * 
 * 
 * 
 * //   &::after{
//     position: absolute;
//     content: 'Shop Now';
//     display: block;
//     left: 0;
//     top: 0;
//     width: 100%;
//     height: 100%;
//     opacity: 0;
//     transition: .4s;
//     background: #f18e7d;
// }
// &:hover:after{
//     opacity: 0.7;
// }
*/


