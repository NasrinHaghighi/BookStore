import styled from "styled-components";

export const Container=styled.div`
  max-width: 100%;
background-color:${props=>props.theme.grayBG} ;

padding:70px 0 0 0 ;

`
export const FooterBox=styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px; 
border-top:1px dotted gray ;

`

export const LeftContainer=styled.div`
border-right:1px dotted gray ;
text-align:right ;
padding: 15px 15px;
`
export const MiddelContainer=styled.div`
text-align:center ;
padding: 15px 15px;
`
export const Right=styled.div`
border-left:1px dotted gray ;
padding: 15px 15px;
`
