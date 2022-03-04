import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


import { DivContainer } from "../Styles/StyledCreatePets";

import { StyleButton } from "../Styles/StyledButtons.js";
import { createAdmin } from "../Redux/Actions";
export function CreateAdmin() {
  const dispatch = useDispatch();

  
  const [loading, setLoading] = useState(false);

  const {rol} = useSelector((state)=> state)


  const [state, setState] = useState({
    email: '',
    password1: '',
    password2:'',
    roleId: ''
  });



  const handleChanges = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    console.log(state.password1)
    console.log(state.password2)
  };

  const handleSelectAdmin = (e) => {
    setState({
      ...state,
      roleId: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createAdmin(state.email,state.password1,state.roleId,rol))
    setState({
      email: '',
      password1: '',
      password2:'',
      roleId: ''
    });
  };

 
  return (
    <DivContainer>
      <form onSubmit={handleSubmit}>
        <br />
        <br />
        <input
          type="text"
          placeholder="email"
          name="email"
          value={state.email}
          onChange={handleChanges}
        />
        <br /> <br />
        <select onChange={handleSelectAdmin}>
          <option disabled selected>
            Tipo de Admin
          </option>
          <option name="Admin" value={2}>
            Admin
          </option>
          <option name="SuperAdmin" value={3}>
            SuperAdmin
          </option>
        </select>
        <br />
        <br />
        <input
          type="password"
          placeholder="Contraseña"
          name="password1"
          value={state.password1}
          onChange={handleChanges}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Repita la contraseña"
          name="password2"
          value={state.password2}
          onChange={handleChanges}
        />
     
        <br /> <br />
        <StyleButton type="submit">Crear Admin</StyleButton>{" "}
      </form>
    </DivContainer>
  );
}

export default CreateAdmin;