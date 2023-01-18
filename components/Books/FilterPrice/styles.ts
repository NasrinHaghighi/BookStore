import styled from "styled-components";

import { Dropdown } from "react-bootstrap";




export const DropDownToggle =  styled(Dropdown.Toggle)`
padding:10px 15px ;
font-size:18px ;
border-radius:8px ;
background-color:${props=>props.theme.orange} !important;
border:none ;
color:#fff ;
 overflow: hidden;
  transition:all .3s ease-in-out ;
  box-shadow: 0px 1px 2px rgba(198, 228, 246, 0.05);

`

export const DropDownMenu = styled(Dropdown.Menu)`
   
  transform: translate(0px, 48px) !important;
  width:300px;
  height:120px;
  border-radius: 12px;
  padding: 16px 10px 16px 0px;
  background-color: ${(props) => props.theme.white};
  
  &>div{
    margin:10px ;
  }
`
export const PriceItem=styled.div`
display:flex ;
justify-content:space-between ;
align-items:center ;
font-size:18px ;
font-weight:700 ;
&>span{

}

`