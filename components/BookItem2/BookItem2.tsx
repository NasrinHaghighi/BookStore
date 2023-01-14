import React,{useState} from 'react'
import {BookItem2Container, InfoContainer, ShowMoreBtn, Price} from './styles'
import {Item} from '../Features/Features'
import Link from 'next/link'
import {Images} from '../../helpers/Image'


interface ItemProps{
    item:Item
}
function BookItem2({item}:ItemProps) {
    const [showMore, setShowMore] = useState(false);

    const handelShowMore=(e:any)=>{
        e.preventDefault();
        setShowMore(!showMore)
     
    }
  return (
    <Link href={`/books/${item.id}+${item.volumeInfo.title}`}>

    <BookItem2Container>
         <Images src={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : ''} width={250} height={300}   alt="book"/>
      <InfoContainer>
      <h4>{item.volumeInfo.title}</h4>
      <h5>{item.volumeInfo.authors? item.volumeInfo.authors[0]: ''}</h5>  
      <p>
        {item?.volumeInfo?.description ? 
        showMore ? item?.volumeInfo?.description 
        :item?.volumeInfo?.description.substring(1,300) 
      : <p>For this book description is not available</p>}
      
      <ShowMoreBtn className="btn" onClick={handelShowMore}>{showMore ? 'Show less' : 'Show more'}</ShowMoreBtn>
      </p>
      <Price>{item?.volumeInfo.pageCount ? item?.volumeInfo.pageCount : 100} , 00 e</Price>
       </InfoContainer>
       
    </BookItem2Container>
    </Link>
  )
}

export default BookItem2