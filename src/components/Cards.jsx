import React, {Fragment} from "react";
import {StyledCard, StyledCardContainer, ImgCard} from '../Styles/StyledCards.js';
import {Link} from "react-router-dom";

//import Img from "../Icos/homeim1.svg"

export default function Cards({pets}) {
    return (<Fragment >
        <br/>
       
        <StyledCardContainer key={Math.random(5)}> {
            typeof(pets) !== 'string'? pets.map((p) => (<Fragment key={p.id} >
 <Link to={`/details/${p.id}`}>
                <StyledCard >
                    <h1>{p.name}</h1>
                    
                    {/* <p>{p.description}</p> */}
                    <ImgCard src={p.image}/>

                    <br/>
                </StyledCard>
                </Link>
                
            </Fragment>)) : typeof(pets) === 'string'? (<h1>             {pets}</h1>): (<h1>             Cargando datos</h1>)
        } </StyledCardContainer>


       
    </Fragment>);


}
