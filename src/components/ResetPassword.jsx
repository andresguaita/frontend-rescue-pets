import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DivContainer } from "../Styles/StyledFormShelter";
import { resetPassword } from '../Redux/Actions';
import { Button } from '../Styles/StyledLogin';

export const ResetPassword = () => {
  const dispatch= useDispatch()
  const {token} = useParams()


  const [input, setInput] = useState({
    password1: '',
    password2: ''
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };  

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword(token, input.password1))
    setInput({
      password1: '',
      password2: ''
    });

  };
  return (
    <div >
      <DivContainer>
        <h1>Resetear Contraseña</h1>
        <form onSubmit={handleSubmit} className="formulario">
        <label>Escriba su nueva contraseña</label>
        <input name="password1" value={input.password1} type="password" onChange={handleChange} className="inputForm"/>
        <label>Confirme su nueva contraseña</label>
        <input name="password2" value={input.password2} type="password" onChange={handleChange} className="inputForm"/>
        <Button type='submit'>Restaurar contraseña</Button>
        </form>
    </DivContainer>
    </div>
  )
}
