import styled,  { keyframes } from "styled-components";

const FadInText = keyframes`
from { opacity: 0; top:90%}
    to { opacity:1;}; 
    
`;
const FadInbutton = keyframes`
from { opacity: 0; left:0}
    to { opacity:1;left:10%}; 
    
`;
const FadInImage = keyframes`
from { opacity: 0; right:-40%}
    to { opacity:1;right:10%}; 
    
`;

export const SliderItemontainer=styled.div`
width:100% ;
height:700px ;
padding:100px 50px ;
display:grid ;

grid-template-columns:repeat(2, 1fr) ;
position:relative ;

`

export const Left=styled.div`



`
export const Title=styled.h1`
position:absolute ;
font-size:48px ;
font-weight:700 ;
opacity:0 ;
top:50%;
left:10% ;
&>div{
    font-weight:900 ;
}
&.active{
    animation: ${FadInText} 1s  0.5s forwards;
}
`
export const SeeMore=styled.button`
border:none;
position:absolute ;
width:150px ;
height:50px ;
opacity:0 ;
bottom:18%;
left:0% ;
background-color:${props=>props.theme.orange} ;
&.active{
    animation: ${FadInbutton} 1s  0.5s forwards;
}
`
export const Right=styled.div`

opacity:0;
position:absolute ;
top:30%;
right:-40%;

&.active{
    animation: ${FadInImage} 1s  0.5s forwards;
}


`