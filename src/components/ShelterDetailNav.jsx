import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

// styles
import {StyledNav, StyledLink} from '../Styles/StyledShelterDetails'

const ShelterDetailNav = ({id}) => {

  const {email} = useSelector(state => state)
 

  return (
   <Fragment>
     <StyledNav >
        <StyledLink to={`/shelters/${id}`}>Ver Todas las Mascotas</StyledLink>
        {
         email===null && <StyledLink to={`/shelters/${id}/form`}>Quiero ser un hogar de Tránsito</StyledLink>
        }
        
    </StyledNav></Fragment>
  )
}


export default ShelterDetailNav