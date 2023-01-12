
import React,{useState} from 'react'
import {Conatiner, Tabs, Tab} from './styles'


const tabs=[
    {tit:'Description', value:'description'},
    {tit:'Book specific', value:'specific'},
    {tit:'Authors', value:'authors'},
    {tit:'Comments', value:'comments'},
]
function BookAllInfo() {
    const [activeTab, setActiveTab] =useState<string>('description')
  return (
    <Conatiner>
        <Tabs>
           {tabs.map((item, i)=>{
            return <Tab key={i}  className={ activeTab === item.value ? 'active': ''}>{item.tit}</Tab>
           })}
        </Tabs>
    </Conatiner>
  )
}

export default BookAllInfo