import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlert,deleteAlert } from "../Redux/Actions";

import { Table } from "../Styles/StyledAlert";
import { DivContainer } from "../Styles/StyledTech.js";
import { StyledButtonEditAdminPet} from '../Styles/StyledDashboardPetAdmin'
export default function Alerta() {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlert());
  }, [dispatch]);

  const handleSubmit = (id) => {
    console.log(id)
    dispatch(deleteAlert(id))
   
  }

  
 
  return (
    <DivContainer>
    <Table>
    <>
    <h2 className="text-center" >MIS ALERTAS</h2>
      <table align="center" >
        <thead>
          <th>Direccion</th>
          <th>Descripción</th>
          <th>Imagen</th>
          <th>Eliminar Alerta</th>
        </thead>
        {alert.length ? (
          alert.map((alert) => (
        
            <tbody key={alert.id} id={alert.id}>
              <td>{alert.direction}</td>
              <td>{alert.description}</td>
              <img src={alert.image} width='150 px' height='150 px'/>
              <td>{<StyledButtonEditAdminPet onClick={() => handleSubmit(alert.id)}><i className="fas fa-edit"></i></StyledButtonEditAdminPet>}</td>
            </tbody>
          ))
        ) : (
          <DivContainer><h2>NO HAY ALERTAS EN ESTE MOMENTO</h2></DivContainer>
        )}
      </table>
       
    </>
    </Table>
    </DivContainer>
  );
}
