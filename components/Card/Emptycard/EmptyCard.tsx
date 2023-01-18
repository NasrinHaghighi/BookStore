import React from 'react'
import {EmptyCardConatiner, Title, Icon} from './styles'

import { MdDoubleArrow } from "react-icons/md";
import Link from 'next/link';


function EmptyCard() {
  return (
    <EmptyCardConatiner>
        <h1>You dont have any book in your card!</h1>
        <Link href='/books'><Title>Let s buy book <MdDoubleArrow /></Title></Link>
    </EmptyCardConatiner>
  )
}

export default EmptyCard