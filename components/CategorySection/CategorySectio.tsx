import React from 'react'
import {Conatiner, InnerConatiner, Title, ViewAll, Top, Content,CategoryItem} from './styles'
import Link from 'next/link'
import { MdDoubleArrow, MdFoodBank } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { RiHealthBookLine } from "react-icons/ri";
import { ImNewspaper } from "react-icons/im";

const arr=[
    {id:1, tit:'Arts & Photography', value:'art', icon:<FaPhotoVideo/>, color:'#ff8e8e', bg:'#fff6f6'},
    {id:2, tit:'Romance', value:'romance', icon:<GoHeart/> ,color:'#00cdef', bg:'#e6f2f4'},
    {id:3, tit:'Food & Drink', value:'food', icon:<MdFoodBank/>, color:'#f01000', bg:'#f4e6e5'},
    {id:4, tit:'Health', value:'health', icon:<RiHealthBookLine/>, color:'#00cdef', bg:'#e6f2f4'},
    {id:5, tit:'Biography', value:'biography', icon:<ImNewspaper />, color:'#ff8e8e', bg:'#fff6f6'},
]
function CategorySectio() {
  return (
    <Conatiner>
       <InnerConatiner>
        <Top>
            <Title>Featured Categories</Title>
            <ViewAll><Link href='/books'>All Categories<MdDoubleArrow /></Link></ViewAll></Top>

            <Content>
{arr.map((item) =>{
    return <CategoryItem style={{ backgroundColor: item.bg }}>
<Link href='/books'>
  <div style={{ color: item.color, fontSize:50 }}>{item.icon}</div>
  <h4>{item.tit}</h4>
  <h6>Shop Now</h6>
</Link>
    </CategoryItem>
})}
</Content>
       </InnerConatiner>
    </Conatiner>
  )
}

export default CategorySectio