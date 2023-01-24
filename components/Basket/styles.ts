import styled from "styled-components";
import { Dropdown } from "react-bootstrap";
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
export const DropDownToggle = styled(Dropdown.Toggle)`
  background-color: transparent !important;
 border:none !important ;
  position: relative;
  overflow: hidden;
  padding:0 30px ;
  font-size:18px ;
  color:${props=>props.theme.orange} !important;
  display:flex ;
  &::after{
display:none ;
  }
`

export const DropDownMenu = styled(Dropdown.Menu)<{
  show: boolean;
}>`
  transform: translate(-400px, 30px) !important;  
 width:500px ;
  box-shadow: ${props=>props.theme.alertBoxshdow};
 display:${props=>props.show ? 'block' : 'none'};
 padding:30px;

`;

export const DropDownItem = styled(Dropdown.Item)`
 
`
export const ItemContainer=styled.div`

padding:10px 0;
display: grid;
grid-template-columns: 2fr 1fr;
align-items:center ;
`
export const Title=styled.p`
font-size:18px ;
font-weight:700 ;
`
export const Right=styled.div`
display:flex ;
justify-content:right;
align-items:center ;

`
export const Trash=styled.div`
text-align:center ;
color:${props=>props.theme.orange} ;
margin:0 20px ;

`
export const Bottom=styled.div`

display:flex ;
justify-content:center ;
align-items:center ;
padding:30px 10px ;
border-radius:8px;
`

export const Card=styled.button`
width:300px ;
padding:10px 15px ;
border:none ;
background-color:${props=>props.theme.orange} ;
border-radius:8px;
color:#fff !important;
box-shadow:${props=>props.theme.alertBoxshdow} ;
`