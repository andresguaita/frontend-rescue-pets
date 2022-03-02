import React from "react";
import {StyledCard, StyledCardContainer} from '../Styles/StyledCardShelter.js';
export default function CardShelter({name, address, phonenumber}) {

    return (
        <StyledCard>
            <h1>{name}</h1>
            <h3>Direccion: <p>{address}</p></h3>
            <h3>Numero Telefonico: <p>{phonenumber}</p></h3>
        </StyledCard>
        );
};

