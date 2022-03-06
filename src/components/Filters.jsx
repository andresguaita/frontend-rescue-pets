import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getcities, getCountries, getFilterShelters, getPetsFilter, getSpecies, getStates, getTemperaments} from '../Redux/Actions/index'
import { Container,SelectStyle } from '../Styles/StyledFilters'
import {StyleButton, StyleButtonMini, StyleButtonUbicacion} from '../Styles/StyledButtons'
import {IoNavigateCircle} from "react-icons/io5";
import { APIGATEWAY_URL } from '../utils/constant'


const Filters = ({idcity, cambiarEstado}) => {
     const dispatch = useDispatch()

     
     const countries = useSelector((state) => state.countries)
     const states = useSelector((state) => state.states)
     const cities = useSelector((state) => state.cities)
     const pets = useSelector((state) => state.petsfilter)
     const temperaments = useSelector((state) => state.temperaments)
     const ages = useSelector((state) => state.ages)
     const city = useSelector((state) => state.cityId)
     const status=useSelector((state)=>state.status)
     const species = useSelector((state) => state.species)
     const shelter = useSelector((state) => state.shelter)
     
     // shelterId: '',
     // speciesId: '',
     // ageId: '',
     // temperamentId: '',
     // petStatusId:''



     const [link, setLink] = useState(`${APIGATEWAY_URL}/pets/${idcity?idcity:city}`)

     const [input, setInput] = useState({})

     useEffect(()=>{
          dispatch(getCountries())
     },[dispatch])

     useEffect(()=>{
          setLink(`${APIGATEWAY_URL}/pets/${idcity?idcity:city}`)
     },[idcity])

     useEffect(()=>{
          let query = `${link}?`
          Object.entries(input).forEach(([key,value])=> {
               query = `${query}${[key]}=${[value]}&`
          
          })  
          dispatch(getPetsFilter(query))
          // dispatch(getSpecies())
          // dispatch(getFilterShelters())
     },[input])



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
     <Container>
        <StyleButtonUbicacion onClick={()=>cambiarEstado(true)}>  <IoNavigateCircle/>
               Cambiar ubicación
          </StyleButtonUbicacion >
          {/* <label>Por País:</label> */}
               {/* <SelectStyle onChange={e => handleSubmitCountry(e)}>
                    <option hidden >Países</option>
                    {countries.map(e => (
                         <option key={e.id} value={e.id} >{e.country}</option>
                    ))}
               </SelectStyle> */}
          {/* <label>Por Ciudades:</label> */}
               {/* <SelectStyle onChange={e => handleSubmitState(e)}>
                    <option hidden >Estados</option>
                    {states.map(e => (
                         <option key={e.id} value={e.id} >{e.state}</option>
                    ))}
               </SelectStyle> */}

               {/* <SelectStyle onChange={e => handleSubmitCities(e)}>
                    <option hidden >Ciudades</option>
                    {cities.map(e => (
                         <option key={e.id} value={e.id} >{e.city}</option>
                    ))}
               </SelectStyle> */}

          {/* <label>Por Refugio:</label> */}
          <SelectStyle name='shelterId' onChange={(e)=>handleSelect(e)}>
                    <option  hidden >Refugios</option>
                    {shelter.map(e => (
                       <option key={e.id} value={e.id} >{e.name}</option> 
                    ))}
               </SelectStyle>
          {/* <label>Por Especie:</label> */}
          <SelectStyle name='speciesId' onChange={(e)=>handleSelect(e)}>
                    <option value={"Especies"} >Especies</option>
                    {species?.map(s =>(
                         <option key={s.id} value={s.id}>{s.specie}</option>
                    ))}
               </SelectStyle>
          {/* <label>Por Edad:</label> */}
          <SelectStyle name='ageId' onChange={e => handleSelect(e)}>
                    <option value="Edad" >Rango Edad</option>
                    {ages?.map(element => (
                         <option key={element.id} value={element.id} >{element.age}</option>
                    ))}
               </SelectStyle>
          {/* <label>Temperamento:</label> */}
          <SelectStyle name='temperamentId' onChange={(e)=>handleSelect(e)}>
                    <option hidden >Temperamento</option>
                    {temperaments && temperaments?.map(element => (
                         <option key={element.id} value={element.id} >{element.temperament}</option> 
                    )) 
                    }
               </SelectStyle>
          {/* <label>Status:</label> */}
          <SelectStyle name='petStatusId' onChange={(e)=>handleSelect(e)}>
                    <option hidden >Status</option>
                    {status?.map(element => (
                         <option key={element.id} value={element.id} >{element.status}</option>
                    ))}
               </SelectStyle>
     </Container>
     )
}

export default Filters
