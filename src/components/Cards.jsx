import React, {Fragment} from "react";
import {StyledCard, StyledCardContainer, ImgCard} from '../Styles/StyledCards.js';
import {Link} from "react-router-dom";

//import Img from "../Icos/homeim1.svg"

export default function Cards({pets}) {
    return (<Fragment >
        <br/>
       
        <StyledCardContainer key={Math.random(5)}> {
            typeof(pets) !== 'string'? pets.map((p) => (<Fragment key={p.id} >
 
                <StyledCard >
                <Link to={`/details/${p.id}`}>   <h1>{p.name}</h1></Link>
                   
                <Link to={`/shelters/${[p.shelter][0].id}`}>  <p className="hashtag"> #{[p.temperament][0].temperament} </p> <p className="hashtag"> #{[p.shelter][0].name.replace(/\s/g, '')}</p> </Link>
                    {/* <p>{p.description}</p> */
                    
                    }
                   <Link to={`/details/${p.id}`}>   <ImgCard src={p.image}/></Link>

                    <br/>
                </StyledCard>
                
                
            </Fragment>)) : typeof(pets) === 'string'? (<h1>             {pets}</h1>): (<h1>             Cargando datos</h1>)
        } </StyledCardContainer>


       
    </Fragment>);


}
