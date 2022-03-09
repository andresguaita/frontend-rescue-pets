import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSheltersPaises, getCountAdopted2 } from '../Redux/Actions';
import {Center, CenterChild ,Table} from "../Styles/StyledPetsInDashboard";
import { Typography } from '@material-ui/core/';

const CuadroStatisGral = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountAdopted2())
        dispatch(getSheltersPaises());
      },[])

const paises = useSelector(state => state.countries)

const AdopGral = useSelector(state => state.countAdopted2)
// console.log("AdopGral",AdopGral)
const ShelterXPais = useSelector(state => state.SheltersPaises)
// console.log("ShelterXPais",ShelterXPais)

  return (
    <div>
      <Center>
        <CenterChild>
          <Typography>
              {/* <font color='#23282E' face="sans-serif,Roboto"> */}
                <h4>Cantidad de Adopciones por Refugio</h4>
              {/* </font>     */}
                <Table>
                <thead>
                    <tr>
                      <th>PAIS</th>
                      <th>COD_REFU</th>
                      <th>REFUGIO</th>
                      <th>CANT_ADOP</th>
                    </tr>
                  </thead>  
                  {AdopGral.length && AdopGral?.map(p =>{
                      for(let i=0; i<ShelterXPais.length;i++){
                        if (p.shelterId === ShelterXPais[i].id){
                          return(
                          <tr>
                              <td>{ShelterXPais[i].city.state.country.country}</td>
                              <td>{p.shelterId}</td>
                              <td>{ShelterXPais[i].name}</td>
                              <td>{p.count}</td>
                          </tr>
                          )
                        
                        }
                      }               
                  })   
                  }      
                </Table>
            </Typography>      
        </CenterChild>
      </Center> 
    </div>
  )
}

export default CuadroStatisGral