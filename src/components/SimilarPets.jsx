import React, { Fragment, useEffect , useLayoutEffect} from "react";
import { getPetsSimilar, getPetId } from '../Redux/Actions/index.js';
import { useParams } from "react-router";
import {
  StyledCard,
  StyledCardContainer,
  ImgCard,
  StyledInfo,
} from "../Styles/StyledSimilarPets.js";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export function SimilarPets() {
  let petsfilter = useSelector((state) => state.petsfilter);
  let pets = useSelector((state) => state.pets_similar);
  
  let Datos = useSelector((state) => state.petOne);
  const dispatch = useDispatch();
  let { id } = useParams();
  let id2 = window.location.pathname;
  id2 = id2.replace("/details/", "");

  useEffect(() => {
  
      dispatch(getPetsSimilar(Datos, petsfilter));
     
  }, [dispatch]);


  const handleClick = (e) => {
    window.scrollTo(0, 0)
    dispatch(getPetId(id));
  dispatch(getPetsSimilar(Datos, petsfilter));
 
  };
  
  

  const handleClick2 = (e) => {
   
    dispatch(getPetId(id));
    dispatch(getPetsSimilar(Datos, petsfilter));
    
    
   
    };
    
  if (pets) {
    return (
      <Fragment>
        
        {pets.length ? (<StyledInfo ><h1>Más recomendaciones para ti </h1></StyledInfo  >)  :""}
        <StyledCardContainer  onPointerEnter={(e) => handleClick2(e)}>
        {Datos.length ? ( pets.map((e) => (
            <Link to={`/details/${e.id}`}  onChange={(e) => handleClick2(e) } key={e.id} onClick= {(e) => {handleClick(e); handleClick2(e)}} key={e.id}>
              <StyledCard key={e.id}>
                {" "}
                <h1>{e.name} </h1>
                <ImgCard src={e.image} />
                <br />
              </StyledCard>
            </Link>
          )) ) : ""}
        </StyledCardContainer>
      </Fragment>
    );
  }
}

export default SimilarPets;
