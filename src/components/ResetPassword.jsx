import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
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
    <div style={{marginTop: 100}}>
        <h1>Resetear Contraseña</h1>
        <form onSubmit={handleSubmit}>
        <label>Escriba su nueva contraseña</label>
        <input name="password1" value={input.password1} type="password" onChange={handleChange}/>
        <label>confirme su nueva contraseña</label>
        <input name="password2" value={input.password2} type="password" onChange={handleChange}/>
        <Button type='submit'>Restaurar contraseña</Button>
        </form>
        
    </div>
  )
}
