import React, { useEffect, useState} from 'react';
import {Pie} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useSelector, useDispatch } from 'react-redux';
import { getSheltersPaises } from '../Redux/Actions';


const GraficoStatisPais = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSheltersPaises());
      },[])

const paises = useSelector(state => state.countries)

const ShelterXPais = useSelector(state => state.SheltersPaises)
console.log("ShelterXPais",ShelterXPais)
console.log("Codigo Refugio",ShelterXPais[0].id)
console.log("Nombre Refugio",ShelterXPais[0].name)

let auxArrayPaises=[]; 
let auxArrayDatos=[];
for(let j=0; j<paises.length;j++){
    let contador=0;
    for(let i=0; i<ShelterXPais.length;i++){
        if(paises[j].id === ShelterXPais[i].city.state.country.id){
           contador++
        }   
    } 
   
    auxArrayDatos.push(contador) 
    auxArrayPaises.push(paises[j].country)
    
}

const etiquetas=auxArrayPaises
const estado=auxArrayDatos

const data={
    labels:etiquetas,
    datasets:[{
        label:'Cantidad',
        backgroundColor:[
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360"
        ],
        data:estado
    }]
};

const opciones={
     maintainAspectRatio:false,
    responsive:true
}

  return (
    <>
    <div style={{width:'100%', height:'200px' }}>
        {/* <h3>Cantidad de Refugios por País</h3> */}
        <Pie data={data} options={opciones}/>
    </div>
   </>  
  )
}

export default GraficoStatisPais