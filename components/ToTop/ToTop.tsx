import React ,{useState, useEffect}from 'react'

import { BsFillArrowUpCircleFill } from  "react-icons/bs";
import styled, { keyframes } from 'styled-components';


 const puls = keyframes`
 0% {
    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
    transform: scale(0.8);
  }
  100% {
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    transform: scale(1.2);
  }
 `   
const Conatiner=styled.div`
color:${props=>props.theme.orange} ;
box-shadow: 0px 0px 1px 1px #0000001a;
font-size:30px ;
display:flex ;
justify-content:space-evenly ;
align-items: center;
position: fixed; 
z-index:10 ;
right:5% ;
bottom:150px ;
border-radius:50% ;
width:30px ;
height:30px ;
cursor: pointer;
transition:all .3s ease-in-out;

animation:${puls} 1s infinite;
`


function ToTop() {
    const [visible, setVisible] = useState(false)
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 800){
          setVisible(true)
        } 
        else if (scrolled <= 300){
          setVisible(false)
        }
      };
      
      const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };
useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
}, [])
   
  return (
    <Conatiner onClick={scrollToTop}  style={{display: visible ? 'inline' : 'none'}} >
    <BsFillArrowUpCircleFill />
    </Conatiner>
  )
}

export default ToTop