import React from 'react';
// import {Line} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import '../Styles/Graphics.css';
import { useSelector, useDispatch } from 'react-redux';

function Graphics(props) {
const idUser = useSelector(state => state.id)

console.log(idUser , "id user")

const ShelterAndCityINfo = useSelector(state => state.ShelterAndCityId)
console.log("ShelterAndCityINfo------------>",ShelterAndCityINfo)

const shelterId = ShelterAndCityINfo.shelterId
console.log("shelterId------------>",shelterId)

const DetailPets=useSelector(state => state.allPets)
    
const DetailPetsFilter = DetailPets.filter(el => el.shelterId === shelterId)

var auxDatos=[];
const Gatos=DetailPetsFilter.filter(el => el.speciesId=== 1 && el.petStatus.id === 2)
if(Gatos.length){
    auxDatos.push(Gatos.length)
}else{
    auxDatos.push(0)
}

const Perros=DetailPetsFilter.filter(el => el.speciesId=== 2 && el.petStatus.id === 2)
if(Perros.length){
    auxDatos.push(Perros.length)
}else{
    auxDatos.push(0)
}

const Aves=DetailPetsFilter.filter(el => el.speciesId=== 3 && el.petStatus.id === 2) 
if(Aves.length){
    auxDatos.push(Aves.length)
}else{
    auxDatos.push(0)
}

const Cerdos=DetailPetsFilter.filter(el => el.speciesId=== 4 && el.petStatus.id === 2)
if(Cerdos.length){
    auxDatos.push(Cerdos.length)
}else{
    auxDatos.push(0)
}

const Otros=DetailPetsFilter.filter(el => el.speciesId=== 5 && el.petStatus.id === 2)
if(Otros.length){
    auxDatos.push(Otros.length)
}else{
    auxDatos.push(0)
}

const estado=auxDatos

    const data={
        labels:["Gatos", "Perros", "Aves", "Cerdos", "Otros"],
        datasets:[
            {
            label:"Cantidad Adoptados por Especies",
            backgroundColor:' #63ac44',
            borderColor:'black',
            borderWidth:1,
            hoverBackgroundColor:'rgba(0,255,0,0.2)',
            hoverBorderColor:'#FFFF00',
            data:estado
            // fill: false,
            // backgroundColor: 'rgba(73,155,234,1)',
            // borderColor:'rgba(73,155,234,1)',
            // pointBorderColor:'rgba(73,155,234,1)',
            // pointBorderWidth:1,
            // pointHoverRadius:5,
            // pointHoverBackgroundColor:'rgba(73,155,234,1)',
            // pointHoverBorderColor:'rgba(73,155,234,1)',
            // pointRadius: 1,
            // pointHitRadius: 10,
            // data: [0.17, 19, 156, 357, 565, 1149]
            
            }
        ]
    }
    const opciones={
        maintainAspectRatio:false,
        responsive:true
    }
    return (
        <div className="containerGrafica">
            <Bar data={data} options={opciones}/>
        </div>
    );
}

export default Graphics;