import React from 'react'
import { Link } from 'react-router-dom'

export const ConfirmedAccount = () => {
  return (
    <div style={{marginTop: 100}}>
        <h1>Muchas gracias por confirmar su cuenta</h1>
        <Link to='/login'>Iniciar sesion</Link>
    </div>
  )
}
