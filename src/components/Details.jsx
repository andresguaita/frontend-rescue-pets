import React, { Fragment, useState, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import {
  StyledDetails,
  StyledDetailsLeft,
  StyledDetailsRight,
  Cuadro,
  Imgag,
} from "../Styles/StyledDetails.js";
import {
  addToFavorites,
  getPetId,
  removeFromFavorites,
} from "../Redux/Actions/index.js";
import { useParams } from "react-router";
import SimilarPets from "./SimilarPets.jsx";
import FormAdoption from "./FormAdoption.jsx";
import Donaciones from "./Donaciones.jsx";

import Pics from "./Pics";

import {
  StyleButtonAccepted,
  StyleButtonBack,
  StyleButtonMini,
} from "../Styles/StyledButtons.js";
import { getPetsSimilar, UpdatePrimerPic } from "../Redux/Actions/index.js";
import Navbar from "./Navbar";
import Espe from "../Icos/espe.png";
import House from "../Icos/house.png";
import Edad from "../Icos/edad.png";
import Ref from "../Icos/ref.png";
import Salud from "../Icos/health.png";
import Peso from "../Icos/star.png";
import Hueso from "../Icos/hueso.png";

const Details = () => {
  const dispatch = useDispatch();

  const pets = useSelector((state) => state.petsfilter);
  const Datos = useSelector((state) => state.petOne);

  const favorites = useSelector((state) => state.favorites);
  let { id } = useParams();
  let id2 = window.location.pathname;
  id2 = id2.replace("/details/", "");
  let controlpic = "";

  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    if (Datos[0]?.image[0] == undefined && Datos[0]?.image == undefined) {
      dispatch(
        UpdatePrimerPic(
          "https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725184-stock-illustration-no-image-available-icon-flat.jpg"
        )
      );
      controlpic = "1";
    } else if (Datos[0].image[0]) {
      dispatch(UpdatePrimerPic(Datos[0]?.image[0]));
      controlpic = "2";
    } else if (Datos[0].image) {
      dispatch(UpdatePrimerPic(Datos[0].image));
      controlpic = "3";
    }

    if (pets && Datos) {
      dispatch(getPetsSimilar(Datos, pets));
    }

    if (!id2) {
      dispatch(getPetId(id));
    } else {
      dispatch(getPetId(id2));
    }
  }, [dispatch]);

  const PicOne = useSelector((state) => state.pic_one);

  const handlePic = (p) => {
    dispatch(UpdatePrimerPic(p));
  };

  const handleClick2 = (e) => {
    dispatch(getPetId(id));
    dispatch(getPetsSimilar(Datos, pets));

    if ((controlpic = "2")) {
      dispatch(UpdatePrimerPic(Datos[0].image[0]));
    } else if ((controlpic = "3")) {
      dispatch(UpdatePrimerPic(Datos[0].image));
    }
  };

  const pet = {
    id: id,
    name: Datos[0]?.name,
    description: Datos[0]?.description,
    weight: Datos[0]?.weight,
    temperament: Datos[0]?.temperament.temperament,
    specie: Datos[0]?.species.specie,
    shelter: Datos[0]?.shelter.name,
    image: Datos[0]?.image,
  };

  const isFavorite = pet.id in favorites;

  const isStored = (value) => {
    if (value) {
      dispatch(removeFromFavorites(pet));
    } else {
      dispatch(addToFavorites(pet));
    }
  };
  
  return (
    <Fragment >
      <Navbar />
      <StyledDetails  
        onPointerEnter={(e) => {
          handleClick2(e);
        }}
      >
        {" "}
        {Datos.length ? (
          <>
            <StyledDetailsLeft onPointerEnter={(e) => {
      handleClick2(e);
    } }>
              <Cuadro>
                {" "}
                {/* {PicOne ? (<Imgag src={PicOne} />) : Datos[0].image < 1 ? (<Imgag src={Datos[0].image[0]} />): (<Imgag src={Datos[0].image} />)} */}
               
               
                <Imgag src={PicOne} />
              </Cuadro>
              <Pics imagenes={Datos}></Pics>
            </StyledDetailsLeft>
            <StyledDetailsRight onPointerEnter={(e) => {
      handleClick2(e);
    } } >
              <h3> {Datos[0].name}</h3>

              <h1> {Datos[0].description}</h1>
              <h2>
                <img src={Peso} className="icos" />
                Peso:
                <span> {Datos[0].weight} </span>
              </h2>

              <h2>
                <img src={Edad} className="icos" />
                Edad:
                <span> {Datos[0].age.age} </span>
              </h2>

              <h2>
                <img src={House} className="icos" />
                Temperamento :<span> {Datos[0].temperament.temperament} </span>
              </h2>

              {/* <h2> <IoFitness/>Vaccines :</span></h2><h1>{Datos[0].vaccines} </h1> */}

              <h2>
                <img src={Espe} className="icos" />
                Especie :<span> {Datos[0].species.specie} </span>
              </h2>

              <h2>
                <img src={Salud} className="icos" />
                Estado :<span> {Datos[0].petStatus.status}</span>
              </h2>

              <h2>
                <img src={Ref} className="icos" />
                Refugio :<span> {Datos[0].shelter.name} </span>
              </h2>
              <center>
                <StyleButtonMini
                  onClick={() => {
                    isStored(isFavorite);
                  }}
                >
                  <img src={Hueso} className="icos"></img>
                  {isFavorite
                    ? "Eliminar de favoritos"
                    : "Agregar a favoritos"}{" "}
                </StyleButtonMini>
              </center>
            </StyledDetailsRight>
          </>
        ) : (
          <h1>Sin Datos</h1>
        )}{" "}
      </StyledDetails>
      
      <div>
        <FormAdoption />
      </div>
      {Datos.length ? <SimilarPets /> : ""}{" "}
    </Fragment>
  );
};
export default Details;
