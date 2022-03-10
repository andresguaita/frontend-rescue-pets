import React, {Fragment, useEffect, useLayoutEffect} from "react";
import {getPetsSimilar, getPetId, UpdatePrimerPic} from '../Redux/Actions/index.js';
import {useParams} from "react-router";
import {StyledCard, StyledCardContainer, ImgCard, StyledInfo2} from "../Styles/StyledSimilarPets.js";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";

export function SimilarPets() {
    let petsfilter = useSelector((state) => state.petsfilter);
    let pets = useSelector((state) => state.pets_similar);

    let Datos = useSelector((state) => state.petOne);
    const dispatch = useDispatch();
    let {id} = useParams();
    let id2 = window.location.pathname;
    id2 = id2.replace("/details/", "");

    useEffect(() => {

        dispatch(getPetsSimilar(Datos, petsfilter));

    }, [dispatch]);


    const handlePics = (e) => {
      console.log(Datos[0], "Datos")
        if (Datos[0] ?. image[0] == undefined && Datos[0] ?. image == undefined) {
            dispatch(UpdatePrimerPic("https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725184-stock-illustration-no-image-available-icon-flat.jpg"));
        } else if (Datos[0].image[0]) {
            dispatch(UpdatePrimerPic(Datos[0] ?. image[0]));

        } else if (Datos[0].image) {
            dispatch(UpdatePrimerPic(Datos[0].image));

        }
    }


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
            <Fragment> {
                pets.length ? (
                    <StyledInfo2>
                        <h1>Más recomendaciones del refugio {
                            pets[0].shelter.name
                        } </h1>
                    </StyledInfo2>
                ) : ""
            }
                <StyledCardContainer onPointerEnter={
                    (e) => handleClick2(e)
                }>
                    {
                    Datos.length ? (pets.map((e) => (
                        <Link to={
                                `/details/${
                                    e.id
                                }`
                            }
                            onChange={
                                (e) => handleClick2(e)
                            }
                            key={
                                e.id
                            }
                            onClick=
                            {(e) => {handleClick(e); handleClick2(e) ; handlePics(e) }}>
                            <StyledCard key={
                                e.id
                            }>
                                {" "}
                                <h1>{
                                    e.name
                                } </h1>
                                <ImgCard src={
                                    e.image[0] ? e.image[0] : e.image                                }/>
                                <br/>
                            </StyledCard>
                        </Link>
                    ))) : ""
                } </StyledCardContainer>
            </Fragment>
        );
    }
}

export default SimilarPets;
