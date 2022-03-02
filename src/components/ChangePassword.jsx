import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getShelterById, passwordUpdate, shelterStartUpdate } from '../Redux/Actions';
import { Button } from '../Styles/StyledLogin'

export const ChangePassword = () => {

  const {id,email} = useSelector((state) => state);

  const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getShelterById(id))
//  }, [dispatch])


  const [input, setInput] = useState({
    id: id,
    email: email,
    oldPassword: '',
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
  dispatch(passwordUpdate({email: input.email, oldPassword: input.oldPassword, newPassword: input.password1}))
  setInput({
    id: id,
    email: email,
    oldPassword: '',
    password1: '',
    password2: ''
  })

};
  

  return (
    <div style={{width: 400, height: 400, marginTop: 100, marginLeft: 100}}>
      <h1>Configuracion</h1>
      <form onSubmit={handleSubmit}>
      <span>Introduzca su contraseña actual</span>
      <input
      onChange={handleChange}
      value={input.oldPassword}
      name="oldPassword"
      type="text"
      ></input>
      <hr/>
      <span>Escriba su nueva contraseña</span>
      <input
      onChange={handleChange}
      value={input.password1}
      name="password1"
      type="text"
      ></input>
      <hr/>
      <span>Confirme su nueva contraseña</span>
      <input
      onChange={handleChange}
      value={input.password2}
      name="password2"
      type="text"></input>
      <hr/>
      <Button type='submit'>Cambiar Contraseña</Button>
      </form>
      
    </div>
  )
}
