import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getShelterById, shelterStartUpdate } from '../Redux/Actions';
import { Button } from '../Styles/StyledLogin'

export const ShelterProfile = () => {

  const {id} = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShelterById(id))
 }, [dispatch])


  const {name, address, phoneNumber, description} = useSelector((state) => state.shelterProfile);

  const [input, setInput] = useState({
    id: id,
    name,
    phoneNumber,
    description,
    address 
  });

  

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

 
 const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(shelterStartUpdate(input))

};
  

  return (
    <div style={{width: 400, height: 400, marginTop: 100, marginLeft: 100}}>
      <h1>Perfil</h1>
      <form onSubmit={handleSubmit}>
      <span>Nombre</span>
      <input
      onChange={handleChange}
      value={input.name}
      name="name"
      type="text"
      ></input>
      <hr/>
      <span>Direccion</span>
      <input
      onChange={handleChange}
      value={input.address}
      name="address"
      type="text"
      ></input>
      <hr/>
      <span>Numero de telefono</span>
      <input
      onChange={handleChange}
      value={input.phoneNumber}
      name="phoneNumber"
      type="text"></input>
      <hr/>
      <span>Descripción</span>
      <textarea
      onChange={handleChange}
      name="description" 
      value={input.description}
      ></textarea>
      <Button type='submit'>Guardar Cambios</Button>
      </form>
      
    </div>
  )
}
