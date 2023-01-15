import styled ,{ keyframes } from "styled-components";

const fadein = keyframes`
from { opacity: 0;top:-50px }
    to { opacity:1;top:0px };
    
`;
export const BoxConatiner = styled.div`
position:relative ;


`;
export const AlertBox = styled.div`
background-color:${props=>props.theme.blue2} ;
border-radius:8px ;
max-width: 1920px;

  left: 0; 
  right: 0; 
top:-50px ;
  margin-left: auto; 
  margin-right: auto; 
 padding: 50px ;
 opacity:0;
  position:absolute ;
 box-shadow:${props=>props.theme.alertBoxshdow} ;
 color: ${props=>props.theme.textStrong};
 font-size: 28px;
 font-weight:700 ;

 &>span{
  font-style:italic ;
  color: #ffff;
 }
 &.show{
  animation:${fadein} .8s .5s forwards;
  
 }
`;
export const Container=styled.div`

max-width: 1920px;
 margin:0 auto ;
 padding:150px 50px ;
 display: grid;
grid-template-columns: 2fr 3fr;
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
`


export const ImageDiv=styled.div`
text-align:center ;
`
export const ConatinerInfo=styled.div`
text-align:left ;
padding-bottom: 150px;
&>h1{
  font-size:56px ;
    color:${props=>props.theme.textStrong};
    letter-spacing:.2rem;
}
&>h2{
  font-size:32px ;
    color:${props=>props.theme.textStrong};
    color:${props=>props.theme.textStrong};
    margin:20px 0 ; 
}
`
export const Authors=styled.div`
margin:10px 0 ;
font-size:28px ;
color:${props=>props.theme.orange};

`
export const Discription=styled.div`
margin:30px 0 ;
font-size:26px ;
`
export const Price=styled.div`
margin:30px 0 ;
font-size:30px ;
color:${props=>props.theme.textStrong};
`
export const BtnConatiner =styled.div`
display:flex ;
`
export const Button=styled.button`
width:170px ;
height:50px ;
border-radius:50px ;
outline:none ;
margin-left:20px ;
border:3px solid ${props=>props.theme.orange};
color:${props=>props.theme.orange};
font-size:20px ;
font-weight:600 ;
transition:all 0.3 ease-in-out ;
&:hover{
    color:${props=>props.theme.orange};
    border:3px solid ${props=>props.theme.textStrong}; 
}

` 

export const Input = styled.input`
width:288px ;
height:50px ;
border-radius:50px ;
padding:0 10px ;
outline:none ;
border:3px solid ${props=>props.theme.grayBorder};

font-size:20px ;
font-weight:600 ;
  ::placeholder {
    
  }
`;
