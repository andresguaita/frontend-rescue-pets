import React from 'react'
import { Link } from 'react-router-dom'
import { DivContainer } from '../Styles/StyledFormShelter'
import { Button } from '../Styles/StyledLogin'

export const ConfirmedAccount = () => {
  return (
    <div >
      <DivContainer>
      <div style={{with: 100}}>
      <h1 style={{textAlign: 'center'}}>Muchas gracias por confirmar su cuenta,<br/> ahora puedes iniciar sesión</h1>
      
        <Button style={{with: 50}}><Link to='/login'>Iniciar sesion</Link></Button>
        </div>
      </DivContainer>
    </div>
  )
}
