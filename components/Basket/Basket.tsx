import React,{useState} from 'react'
import { FaShoppingCart } from "react-icons/fa";
import {BasketContainer, ShopItems,DropDownToggle,DropDownMenu, DropDownItem, ItemContainer,Title, Trash, Right, Bottom,  Card} from './styles'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Images } from "../../helpers/Image";
import { FaTrashAlt } from "react-icons/fa";
import Link from 'next/link';

function Basket() {
    const dispatch=useAppDispatch()
      const [show, setShow] = useState(false);
  const books=useAppSelector(state=>state.books.books)
  //
  
  return (
   
    <BasketContainer>
         
   <Dropdown
    onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
   >
      <DropDownToggle variant="success" id="dropdown-basic">
      <ShopItems>{books.length}</ShopItems><FaShoppingCart /> 
      </DropDownToggle>

      <DropDownMenu show={show}>
      {books.map((item)=>{
        const {id, image, amount,price} =item
        const tit=id.slice(id.indexOf('+')).slice(1)
        //console.log(tit)
        return <ItemContainer>
        <Title> {tit}</Title>
        <Right>
        <Images src={image} width={50} height={60}   alt="book"/>
        <Trash><FaTrashAlt /></Trash>
        </Right>
         </ItemContainer>
         
      })}
        
        <Bottom>
          
<Card><Link href='/card'>Show Card</Link></Card>
        </Bottom>
      </DropDownMenu>
    </Dropdown>
  </BasketContainer>
  )
}

export default Basket