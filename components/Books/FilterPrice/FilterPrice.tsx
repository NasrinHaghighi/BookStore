import React ,{useState,useEffect} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import {DropDownToggle, DropDownMenu, PriceItem} from './styles'
import Slider from '@mui/material/Slider';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import {selectedPrice} from '../../../features/priceFilter'

function valuetext(value: number) {
  return `${value}°C`;
}
function FilterPrice() {
  const val=useAppSelector(state=>state.price.price)
  const dispatch=useAppDispatch()
    const [openDropdown, setOpenDropdown] =useState<boolean>(false)
    const [value, setValue] = useState<number[]>(val);

useEffect(() => {
dispatch(selectedPrice(value))
}, [value])

    const handleChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number[]);
    };
  return (
    <Dropdown
      onToggle={() => setOpenDropdown(!openDropdown)}
       show={openDropdown}
       autoClose='outside'>

      <DropDownToggle variant="success" id="dropdown-basic">
       Price
      </DropDownToggle>



    <DropDownMenu>
      <div>
      <Slider
      min={20}
      max={1000}
       getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="off"
        getAriaValueText={valuetext}
       />

      <PriceItem><span>min:{value[0]}</span><span>max:{value[1]}</span></PriceItem>
      </div>
      </DropDownMenu>
    </Dropdown>
  )
}

export default FilterPrice