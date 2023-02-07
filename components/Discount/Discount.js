import React,{useState} from 'react'
import {Conatiner, InnerConatiner,Title, Top,Tabs , Main, Image,Content, Text, Banner, SeeMore, GridItem, ShopLink } from './styles'
import Link from 'next/link'
import { MdDoubleArrow, MdFoodBank } from "react-icons/md";
import {Images} from '../../helpers/Image'
import { Books } from "../../constants/MOCK_DATA";





const tabData=['History', 'Science & Math', 'Romance', 'Travel']

function Discount({id}) {
    const [active, setActive] =useState('History')

//console.log(active)


  return (
    <Conatiner id={id}>
        <InnerConatiner>
        <Top>
            <Title>Special Discount</Title>
          <Tabs>{tabData.map((item, index)=>{
            return <div
             key={index} 
             className={item === active ? 'active' :  ''}
             onClick={()=>setActive(item)}
             >{item}</div>
          })}</Tabs>
        </Top>
        <Main>
            <Image>
                <Banner> 
                {active === 'History' || active === 'Romance' ?
                    <Images src='/4.svg' width={300} height={200}   alt="book"/> : <Images src='/5.png' width={300} height={200}   alt="book"/>}
                    </Banner>
                <Text>
                    <p>Get Extra</p>
                    <p className='sale'>Sale -25%</p>
                    <p className='over'>ON ORDER OVER $100</p>
                    <SeeMore>See More</SeeMore>
               </Text>
            </Image>
          {active === 'History' || active === 'Romance' ?
           <Content>
            {Books.slice(0,6).map((book, index)=>{
                
                return    <GridItem 
                style={{backgroundImage:`url(${book.image})`}}
                className={'box'+index} bgImg={book.image}>
                    <ShopLink><p>Shop Now</p></ShopLink>
                    </GridItem>
            })}
             
             </Content> :
            
               <Content>
                 {Books.slice(0,6).map((book, index)=>{
                return    <GridItem className={'c'+index}
                 style={{backgroundImage:`url(${book.image})`}}
                 >

                  <ShopLink><p>Shop Now</p></ShopLink>
                 </GridItem>
            })} 
            
            </Content>
             }
        </Main>

        </InnerConatiner>
    </Conatiner>
  )
}

export default Discount
