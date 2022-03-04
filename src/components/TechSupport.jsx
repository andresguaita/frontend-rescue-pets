import React, {useState} from "react";
import { DivContainer, StyledButton } from "../Styles/StyledTech.js";
import { useDispatch, useSelector } from "react-redux";
import {postHelpSupport} from '../Redux/Actions/index'
import Swal from "sweetalert2";

function TechSupport() {

const dispatch = useDispatch()

let {email} = useSelector(state => state)


let [payload, setPayload] = useState({
    email: email ? email : '',
    type: "",
    description: "",
    isUser: email ? true : false
})

const handleChange = (e) => {
  setPayload({
    ...payload,
    [e.target.name]: e.target.value,
  });
};

const handleSelect = (e) => {
  setPayload({
    ...payload,
    type: e.target.value,
  });
};

function handleSubmit(e){
e.preventDefault()
dispatch(postHelpSupport(payload))

setPayload({
  email: "",
  type: "",
  description: "",
  isUser: false
});
}


  return (
    <DivContainer>
      <h2 className="text-center">Fomulario de Soporte</h2>
      <form className="formulario" onSubmit={(e)=>handleSubmit(e)}>
        <fieldset>
          <legend>Escribenos tu consulta</legend>

          {!email && <div className="campo">
            <label>Email: </label>
            <input
              className="inputForm"
              name="email"
              type="email"
              placeholder="Email"
              value={payload.email}
              onChange={(e)=>handleChange(e)}
            />
          </div>}

          <div className="campo">
            <label>Motivo: </label>
            <select onChange={(e)=>handleSelect(e)}>
              <option disabled selected>
                -- Seleccione --
              </option>
              <option value="ERROR">ERROR</option>
              <option value="DUDA">DUDA</option>
              <option value="SUGERENCIA">SUGERENCIA</option>
            </select>
          </div>

          <div className="campo">
            <label>Descripción: </label>
            <textarea 
            name="description" 
            value={payload.description}
            cols="30" 
            rows="20"
            onChange={(e)=>handleChange(e)}
            ></textarea>
            
          </div>

          
            <StyledButton type="submit">Enviar</StyledButton>
          
        </fieldset>
      </form>
    </DivContainer>
  );
}

export default TechSupport;
