import React from 'react'
import {Container, FooterBox,   Right} from './styles'
import Left from './Left'
import Middel from './Middel'
function Footer() {
  return (
    <Container>
        <FooterBox>
<Left />
<Middel/>
<Right>1</Right>
        </FooterBox>
    </Container>
  )
}

export default Footer