import React from 'react'
import styled from 'styled-components'
import { Images } from "../../helpers/Image";

const Container=styled.div`
width:100% ;
text-align:center ;
margin-top: 100px;
`
function Invalid() {
  return (
    <Container>
  <Images src='/images/notfound.png' width={250} height={300}   alt="notfound"/>
    </Container>
  )
}

export default Invalid