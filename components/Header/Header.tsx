import React from 'react'
import {Wapper,HeaderWrapper, Logo, Nav, NavItem, Wrapper,Wrapper2, Lens,Basket, ShopItems} from './styles'
import { Images } from "../../helpers/Image";
import Link from "next/link";
import { RxHome } from "react-icons/rx";
import { FaNewspaper } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import DropDown from './Dropdown/DropDown';

function Header() {
  return (
      <Wapper>
    <HeaderWrapper>
        <Wrapper>
        <Logo>logo</Logo>
        <Nav>
        <NavItem>
              <RxHome /><Link href='/'><span>Home</span></Link> 
        </NavItem>
        <NavItem>
             <Link href='/books'><span>Shop</span></Link> 
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
    </Wapper>
  )
}

export default Header