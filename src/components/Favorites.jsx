import React from "react";
import { useSelector } from "react-redux";
import CardsFavorites from "./CardsFavorites";

import {
  
  StyledCardContainer,
} from "../Styles/StyledCardShelter.js";
import Navbar from "./Navbar";

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div>
      <Navbar />
      <StyledCardContainer>
        {favorites && favorites.msg !== "No hay mascotas favoritas" ? (
          Object.values(favorites).map((favorite) => {
            return (
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
            );
          })
        ) : !favorites ? (
          <h1> {favorites.msg}</h1>
        ) : (
          <h1> Cargando datos</h1>
        )}
      </StyledCardContainer>
    </div>
  );
}
