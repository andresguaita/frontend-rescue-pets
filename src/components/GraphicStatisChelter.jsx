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
            backgroundColor:[
                "#EE6C4D",
                "#F38D68",
                "#662C91",
                "#17A398",
                "#33312E"
            ],
            borderColor:'black',
            borderWidth:1,
            hoverBackgroundColor:'rgba(0,255,0,0.2)',
            hoverBorderColor:'#FFFF00',
            data:estado
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