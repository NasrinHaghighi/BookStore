
import React,{useState} from 'react'
import Description from '../Description/Description'
import {Conatiner, Tabs, Tab, Content, InnerContent} from './styles'
import {Item} from '../Book'
import Specific from '../Specific/Specific'
import Authores from './Authores/Authores'

interface ItemProps{
  item?:Item
}

const tabs=[
    {tit:'Description', value:'description'},
    {tit:'Book specific', value:'specific'},
    {tit:'Authors', value:'authors'},
    {tit:'Comments', value:'comments'},
]
function BookAllInfo({item}:ItemProps) {
    const [activeTab, setActiveTab] =useState<string>('description')
    const handelActive=(value:string)=>{
      return setActiveTab(value)
    }

    const showTabs=(r:string)=>{
      switch (r) {
        case 'description':
         return <Description item={item}/>  
         case 'specific':
         return <Specific item={item}/>  
         case 'authors':
         return <Authores item={item}/>     
        default:
          
          break;
      }
    }
  return (
    <Conatiner>
        <Tabs>
           {tabs.map((item, i)=>{
            return <Tab key={i} 
            onClick={()=>handelActive(item.value)} 
            className={ activeTab === item.value ? 'active': ''}>{item.tit}</Tab>
           })}
        </Tabs>
        <Content>
          <InnerContent>
             {showTabs(activeTab)}
          </InnerContent>
        </Content>
    </Conatiner>
  )
}

export default BookAllInfo