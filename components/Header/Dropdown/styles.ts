import styled from "styled-components";

import { Dropdown } from "react-bootstrap";

export const DropDownToggle = styled(Dropdown.Toggle)`
  background-color: transparent !important;
  border: 0;
  position: relative;
  overflow: hidden;
  padding:0 30px ;
  font-size:18px ;
  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 5px;
    right: 0;
    bottom: 0;
    background-color: #DB1037;
    background-image: linear-gradient(90deg, #DB1037, #CD40E6);;
    transition: .3s ease;
  }

  /* @media (max-width:1400px) {
font-size:14px ;

 }
 @media (max-width:1000px) {
  font-size:12px ;
  padding: 54px 8px;

 } */
`;
export const DropDownMenu = styled(Dropdown.Menu)`
  /* right: -16px !important; */
  transform: translate(0, 100px) !important;  
  display:flex ;
  flex-direction:column ;
  width: 250px;
  height: 350px;
  background-color: white;
  min-width: 250px;
    box-shadow: 0 10px 30px -5px rgb(0 0 0 / 10%);
    pointer-events: none;
    opacity: 0;
    -ms-transform: translateY(30px);
    transform: translateY(30px);
    transition: .3s ease;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  border-radius: 8px;
  padding:28px;
  z-index:99 ;
  /* &.show{
   opacity:1 ;
 }
 &.hide{
  opacity:0 ;
 } */

 
`;
export const MenuItem = styled(Dropdown.Item)`
padding: 15px 0;
border-bottom:1px solid ${props=>props.theme.grayBorder} ;
`;