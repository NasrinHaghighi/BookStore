import React from 'react'
import {BooksConatiner, InnerConatiner} from '../../components/Books/BookstylesIndex'
import Category from '../../components/Books/Category/Category'
import Main from '../../components/Books/Main/Main'


function index() {
  return (
    <BooksConatiner>
        <InnerConatiner>
           
           <Category />
           <Main />
        </InnerConatiner>
    </BooksConatiner>
  )
}

export default index