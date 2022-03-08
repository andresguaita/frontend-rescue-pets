import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DivContainer } from "../Styles/StyledFormShelter";
import { getShelterById, shelterStartUpdate } from '../Redux/Actions';
import { Button } from '../Styles/StyledLogin'
import { ChangePassword } from './ChangePassword';

export const ShelterProfile = () => {

  const { id } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShelterById(id))
  }, [dispatch])


  const { name, address, phoneNumber, description } = useSelector((state) => state.shelterProfile);

  const [input, setInput] = useState({
    id: '',
    name: '',
    phoneNumber: '',
    description: '',
    address: ''
  });

  useEffect(() => {
    setInput({
      ...input,
      id: id,
      name: name,
      phoneNumber: phoneNumber,
      description: description,
      address: address
    })
  }, [name, address, phoneNumber, description])


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
    <div >
      <DivContainer>
      <div>
      <h1>Datos del Refugio</h1>
      <form onSubmit={handleSubmit} className="formulario">
        <span>Nombre</span>
        <input
          className="inputForm"
          onChange={handleChange}
          value={input.name}
          name="name"
          type="text"
        ></input>
        
        <span>Direccion</span>
        <input
          className="inputForm"
          onChange={handleChange}
          value={input.address}
          name="address"
          type="text"
        ></input>
       
        <span>Numero de telefono</span>
        <input
          className="inputForm"
          onChange={handleChange}
          value={input.phoneNumber}
          name="phoneNumber"
          type="text"></input>
       
        <span>Descripción</span>
        <textarea
          onChange={handleChange}
          name="description"
          value={input.description}
        ></textarea>
        <Button type='submit'>Guardar Cambios</Button>
      
      </form>
        
        </div>
      <div>
        <hr style={{border: 'none', height: 10, color: 'black', backgroundColor: 'black'}}/>
        <ChangePassword/>
      </div>
      </DivContainer>
      
      
    </div>
  )
}
