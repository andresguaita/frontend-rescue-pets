import React, { Fragment } from "react";
import { ImgCard} from '../Styles/StyledCards.js';
import { StyledCard } from "../Styles/StyledCards.js";
import { Link } from "react-router-dom";


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
     <br/>
    <div>
      <h1>Tu mascota favorita</h1>

      <div>
      <Link to={`/details/${id}`}>
        <StyledCard>
          <h1>{name}</h1>
          <h3>
            Refugio: <p>{shelter}</p>
          </h3>
          <ImgCard src={image}/>
          <br/>
        </StyledCard>
        </Link>
      </div>
    </div>
    </Fragment> );
}
