import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { StartRestorePassword } from '../Redux/Actions';
import { DivContainer } from "../Styles/StyledFormShelter";
import { Button } from '../Styles/StyledLogin';

export const ForgotPassword = () => {

  const dispatch = useDispatch()

  const [email, SetEmail] = useState('')

  const handleChange = (e) => {
    SetEmail(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(StartRestorePassword(email))
  };
  return (
    <div >
      <DivContainer>
        <form onSubmit={handleSubmit} className="formulario">
          <div className="input-parent">
            <h1 style={{textAlign: 'center'}}>Introduzca el correo electronico asociado a su cuenta</h1>
            <label>Correo electrónico</label>
            <input name="email" value={email} type="text" id="username" onChange={handleChange} className="inputForm"></input>
          </div>
          <Button type="submit">Recuperar Contraseña</Button>
        </form>
      </DivContainer>
    </div>
  )
}
