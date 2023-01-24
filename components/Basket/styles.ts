import styled from "styled-components";

export const BasketContainer = styled.div`
color: ${props=>props.theme.linkColor};
font-size:18px ;
padding:0 30px ;
border-left:1px solid ${props=>props.theme.grayBorder}  ;
display:flex ;
  justify-content:center ;
  align-items:center ;
`

export const ShopItems = styled.div`
background-color:${props=>props.theme.red} ;
border-radius: 10px;
    padding: 2px 5px;
    color:#fff ;
    font-size: 11px;
    margin-right:15px ;
`