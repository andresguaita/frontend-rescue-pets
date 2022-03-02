import React from "react";
import {useSelector} from 'react-redux';
import CardShelter from './CardShelter';
import { Link } from "react-router-dom";
import {StyledCard, StyledCardContainer} from '../Styles/StyledCardShelter.js';
import Navbar from "./Navbar";

export default function Shelters() {

    const allShelters = useSelector((state) => state.Shelters);
    console.log('estado: ', allShelters)
    return (
        <div>
           <Navbar/>
            <StyledCardContainer> 
         
         {
             
              allShelters && allShelters.msg !== 'El refugio que busca no se encuentra,' ? allShelters.map(e => {
                 return (
                     <CardShelter key={e.id} name={e.name} address={e.address} phonenumber={e.phoneNumber} /> 
                 )
             }) : allShelters ? (<h1> {allShelters.msg}</h1>) : (<h1>             Cargando datos</h1>)
         }
    </StyledCardContainer>  
        </div>
        
        );
};