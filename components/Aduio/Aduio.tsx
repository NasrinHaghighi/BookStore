import React,{useRef, useState, useEffect} from 'react'
import {Container, InnerContainer, Text,Anim, Tablet, Phone, Headphone, AduioDiv, Blue} from './styles'
import {Images} from '../../helpers/Image'
import { useInViewport } from 'react-in-viewport';


const  Aduio =() => {


  const myRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const {
    inViewport,
    enterCount,
    leaveCount,
  } = useInViewport(
    myRef,
    // options,
    // config = { disconnectOnLeave: false },
    // props
  );

const [enter, setenter] =useState(false)


useEffect(() => {
 setenter(true)

}, [enterCount])


useEffect(() => {
  setenter(false)
 
 }, [leaveCount])
 console.log(enter)
  return (
    <Container>
        <InnerContainer>
            <Text>lll</Text>



            <Anim ref={myRef}>
               
               <Tablet className={enter ? 'enter' :'exit'}><Images src='/images/tablet.png' width={400} height={536}   alt="book"/></Tablet>
            <Phone className={enter ? 'enter' :'exit'}><Images src='/images/phone.png' width={162} height={323}   alt="book"/></Phone>
          
          <AduioDiv className={enter ? 'enter' :'exit'}><Images src='/images/aduio.png' width={693} height={229}   alt="book"/></AduioDiv>
          <Blue className={enter ? 'enter' :'exit'}>
            <Images src='/images/blue.png' width={347} height={276}   alt="book"/>           
            </Blue> 
            <Headphone className={enter ? 'enter' :'exit'}>  <Images src='/images/headphone.png' width={432} height={646}   alt="book"/></Headphone>
            </Anim>
            
        </InnerContainer>
    </Container>
  )
}

export default Aduio