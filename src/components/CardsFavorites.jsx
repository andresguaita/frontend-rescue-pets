import React, { Fragment } from "react";
import { ImgCard} from '../Styles/StyledCards.js';
import { StyledCard } from "../Styles/StyledCards.js";
import { Link } from "react-router-dom";
import {StyledLink} from "../Styles/StyledShelterDetails"
import allColors from "../variables/Colors.js";


export default function FavoritesCard({
  id,
  name,
  description,
  weight,
  temperament,
  specie,
  shelter,
  image
})
{

    

  return (<Fragment >
    
      <StyledLink to={`/details/${id}`} style={{color:`${allColors.colors[2]}`}}>
        <StyledCard>
          <h1>{name}</h1>
          <h3>
            Refugio: <p>{shelter}</p>
          </h3>
          <ImgCard src={image}/>
          <br/>
        </StyledCard>
        </StyledLink>
      
    
    </Fragment> );
}
