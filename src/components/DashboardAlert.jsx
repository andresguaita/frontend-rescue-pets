import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlert } from "../Redux/Actions";
import { Table } from "../Styles/StyledAlert";
import { DivContainer } from "../Styles/StyledTech.js";

export default function Alerta() {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlert());
  }, [dispatch]);


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
        </thead>
        {alert.length ? (
          alert.map((alert) => (
            <tbody key={alert.id}>
              <td>{alert.direction}</td>
              <td>{alert.description}</td>
              <img src={alert.image} width='150 px' height='150 px'/>
            </tbody>
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </table>
       
    </>
    </Table>
    </DivContainer>
  );
}
