import React from 'react'
import {HeaderWrapper, Logo, Nav, NavItem, Wrapper,Wrapper2, Lens,Basket, ShopItems} from './styles'
import { Images } from "../../helpers/Image";
import Link from "next/link";
import { RxHome } from "react-icons/rx";
import { FaNewspaper } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";


function Header() {
  return (
    <HeaderWrapper>
        <Wrapper>
        <Logo>logo</Logo>
        <Nav>
        <NavItem>
              <RxHome /><span>Home</span> 
        </NavItem>
        <NavItem>
              <span>Shop</span> 
        </NavItem>
        <NavItem>
              <FaNewspaper/><span>About us</span> 
        </NavItem>
        <NavItem className='loginBtn'>
              <FaUser/><span>Signin {' '}/ {' '}Login</span> 
        </NavItem>
        </Nav>
        </Wrapper>
        <Wrapper2>
        <Lens><BsSearch /></Lens>
        <Basket><ShopItems>2</ShopItems> <FaShoppingCart />  </Basket>
            
        </Wrapper2>

    </HeaderWrapper>
  )
}

export default Header