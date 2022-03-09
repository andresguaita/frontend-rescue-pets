import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { SelectStyle } from '../Styles/StyledFilters'

const DonacionesStatistics = () => {
    const dispatch = useDispatch()

    const shelter = useSelector((state) => state.shelter)
    const [input, setInput] = useState({})
    
    function handleSelect(e) {
        if(isNaN(Number(e.target.value))){
             let temp = input
             delete temp[e.target.name]
            
             setInput((input) => {return{...input}})
        }else{
             setInput( (input) => { return {
                  ...input,
                  [e.target.name]: e.target.value
             }})
        }
     
        }

  return (
    <SelectStyle name='shelterId' onChange={(e)=>handleSelect(e)}>
        <option  value={"Refugios"} >Refugios</option>
            {shelter.map(e => (
            <option key={e.id} value={e.id} >{e.name}</option> 
            ))}
    </SelectStyle>
  )
}

export default DonacionesStatistics