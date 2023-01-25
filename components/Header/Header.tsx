import React ,{useState}from 'react'
import {Wapper,HeaderWrapper, Logo, Nav, NavItem, Wrapper,Wrapper2, Lens, DropdownS,DropDownToggle, DropDownMenu, Input} from './styles'
import { Images } from "../../helpers/Image";
import Link from "next/link";
import { RxHome } from "react-icons/rx";
import { FaNewspaper } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

import { selectedcategory } from '../../features/CategorySlice'
import Basket from '../Basket/Basket';
import ShopDropdown from './ShopDropdown/ShopDropdown';

function Header() {
  const category = useAppSelector(state=>state.category?.category)
  const dispatch=useAppDispatch()
      const [show, setShow] = useState(false);
      const [route, setRoute] = useState()
      const router = useRouter()
     const searchHandel=(e:any)=>{
      e.preventDefault()
      dispatch(selectedcategory(e.target.value))
     setTimeout(() => {
      router.push("/books")

     }, 1000);
   
     
     
     }
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
             <Link href='/books'>
            <ShopDropdown />
              </Link> 
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
            {/* *****************SEARCH***** */}
        <Lens >
        <DropdownS
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <DropDownToggle className="main-style" id="dropdown-basic">
       <BsSearch />
      </DropDownToggle>

      <DropDownMenu show={show}>
        <Dropdown.Item >
            <Input onChange={searchHandel} value={category}></Input>
        </Dropdown.Item>
       
      </DropDownMenu>
    </DropdownS>
        </Lens>
           {/* *****************SEARCH***** */}
        <Basket />
            
        </Wrapper2>

    </HeaderWrapper>
    </Wapper>
  )
}

export default Header