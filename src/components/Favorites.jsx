import React from "react";
import { useSelector } from "react-redux";
import CardsFavorites from "./CardsFavorites";
import allColors from "../variables/Colors";

import {
  
  StyledCardContainerFav,
} from "../Styles/StyledCards.js";
import Navbar from "./Navbar";
import { DivContainer } from "../Styles/StyledFormShelter";


export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <>
    <Navbar />
   
    <div style={{textAlign: "center", marginTop:"3rem"}}>
    <h1 style={{color:`${allColors.colors[8]}`, fontWeight:"bold", fontSize:"4rem" }}>
      Favoritos
      </h1>
    </div> 
<StyledCardContainerFav>
  
        { Object.keys(favorites).length !== 0  ? (
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
                image={favorite.image[0]}
              />
               
            );
           
          })
        ) : <DivContainer>
          <h2>No tienes mascotas favoritas</h2>
          <i className="fas fa-folder-open fa-10x"></i>
        </DivContainer>
        }
     </StyledCardContainerFav>
    
    </>
  );
}
