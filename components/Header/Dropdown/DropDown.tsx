import React,{useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import{ DropDownToggle, DropDownMenu, MenuItem} from './styles'


const menuItem=[
  {tit:'Art', value :'art'},
  {tit:'Economy', value :'economy'},
  {tit:'Success', value :'success'},
  {tit:'eBook', value :'eBook'},
  {tit:'Order and delivery', value :'order'},
]
function DropDown() {
  const [show, setShow] = useState(false);


  return (
    <Dropdown>
    <DropDownToggle variant="success" show={show} id="dropdown-basic">
     Shop
    </DropDownToggle>

    <DropDownMenu className={show ? 'show' : 'hide'}>

    {menuItem.map((item)=>{
        return <MenuItem key={item.tit}>{item.tit}
        </MenuItem>
    })}
     
    </DropDownMenu>
    </Dropdown>

  )
}

export default DropDown


{/* <Dropdown show={show} 
    onToggle={() => setShow(!show)}
  
    >
    <DropDownToggle variant="success"  id="dropdown-basic">
     Shop
    </DropDownToggle>

    <DropDownMenu className={show ? 'show' : 'hide'}>

    {menuItem.map((item)=>{
        return <MenuItem key={item.tit}>{item.tit}
        </MenuItem>
    })}
     
    </DropDownMenu>
  </Dropdown> */}