import React, { useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useSelector, useDispatch } from 'react-redux';
import { getCountShelter, getCountAdopted2, getCountAdopted3 } from '../Redux/Actions';


const StatisHome = () => {

const dispatch = useDispatch();

var auxDatos=[];

const countShelters = useSelector(state => state.countShelters)
const countAdopted2 = useSelector(state => state.countAdopted2)
const countAdopted3 = useSelector(state => state.countAdopted3)

const shelter=countShelters.count
const adopted2=countAdopted2.count
const adopted3=countAdopted3.count

if (shelter){
  auxDatos.push(shelter)
}
if (adopted2){
  auxDatos.push(adopted2)
}
if (adopted3){
  auxDatos.push(adopted3)
}

const estado=auxDatos

useEffect(() => {
  dispatch(getCountShelter());
  dispatch(getCountAdopted2());
  dispatch(getCountAdopted3());
},[])

const data={
    labels:["Refugios","Adoptados","En Adopción"],
    datasets:[{
        label:'Cantidad',
        backgroundColor:' #63ac44',
        borderColor:'black',
        borderWidth:1,
        hoverBackgroundColor:'rgba(0,255,0,0.2)',
        hoverBorderColor:'#FFFF00',
        // data:[10,10,20]
        data:estado
       
    }]
};

const opciones={
    maintainAspectRatio:false,
    responsive:true
}

  return (
    <>
     <div style={{width:'25%', height:'200px' }}>
         <h3>Cantidad de Refugios y Mascotas por Estado</h3>
         <Bar data={data} options={opciones}/>
     </div>
    </>  
  )
}

export default StatisHome