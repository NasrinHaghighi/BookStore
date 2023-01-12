import styled from "styled-components";

export const Container=styled.div`
width:60% ;
margin:0 auto ;
`
export const Trow=styled.tr`
padding:30px 50px ;
width:100% ;

border-bottom:2px solid ${props=>props.theme.grayBorder} ;
display:grid ;
grid-template-columns:1fr 2fr ;

`
export const FirstCol=styled.td`
font-weight: 500;
font-size: 20px;
color:${props=>props.theme.textStrong};
@media (max-width:600px) {
  font-size: 14px;
  }
`


export const SecondCol=styled.td`
display:flex;
justify-content:flex-start ;
font-weight: 600;
font-size: 20px;
color:${props=>props.theme.black};
@media (max-width:600px) {
  font-size: 14px;
  }
  `