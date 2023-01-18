import styled from "styled-components";

export const Container=styled.div`

box-shadow: ${props=>props.theme.alertBoxshdow};
`

export const Titles=styled.div`

height: 100px;
width:100% ;
color:#ffff ;
background-color:${props=> props.theme.bachgroundColor} ;
font-size:28px ;
display: grid;
grid-template-columns:0.5fr 0.5fr 2fr 1fr .75fr 1fr;

grid-column-gap: 0px;
grid-row-gap: 0px;
align-items:center ;
&>span{
  
}

`