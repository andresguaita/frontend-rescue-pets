import React from "react";
import { useSelector } from "react-redux";
import CardsFavorites from "./CardsFavorites";

import {
  
  StyledCardContainer,
} from "../Styles/StyledCardShelter.js";
import Navbar from "./Navbar";
import { DivContainer } from "../Styles/StyledFormShelter";


export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div>
      <Navbar />
     
        { Object.keys(favorites).length !== 0  ? (
          Object.values(favorites).map((favorite) => {
            
            return (
              <StyledCardContainer>
              <CardsFavorites 
               id={favorite.id}
                key={favorite.id}
                name={favorite.name}
                description={favorite.description}
                weight={favorite.weight}
                temperament={favorite.temperament}
                specie={favorite.specie}
                shelter={favorite.shelter}
                image={favorite.image}
              />
                </StyledCardContainer>
            );
           
          })
        ) : <DivContainer>
          <h2>No tienes mascotas favoritas</h2>
          <i className="fas fa-folder-open fa-10x"></i>
        </DivContainer>
        }
     
    </div>
  );
}
