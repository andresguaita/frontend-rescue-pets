import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { ImgCard, ImgCardFlag } from "../Styles/StyledCards.js";

import { StyleButton, StyleButtonMini } from "../Styles/StyledButtons";
import {
  PrimerLeft,
  PrimerRight,
  DivContenedor,
} from "../Styles/StyledShelterDetails";

import StatisHome from "./StatisHome.jsx";
import Donaciones from "./Donaciones.jsx";

const ShelterData = ({ Data }) => {
  return (
    <Fragment><h1 className="title">{Data.name}</h1>

    <DivContenedor key={Math.random(5)}>
    
      {" "}
      <PrimerLeft>
        {typeof Data !== "string" ? (
          <Fragment>
            {/* <Link to={`/details/${p.id}`}> */}

           

            <h3>{Data.description}</h3>

            {typeof Data["city"] != "undefined" || Data["city"] != null ? (
              <h2>{Data["city"]["city"]}</h2>
            ) : (
              <h1> Cargando datos</h1>
            )}
            {typeof Data["city"] != "undefined" || Data["city"] != null ? (
              <h2>{Data["city"]["state"]["country"]["country"]}</h2>
            ) : (
              <h1> Cargando datos</h1>
            )}

            {typeof Data["city"] != "undefined" || Data["city"] != null ? (
              // <h2>{Data["city"]["state"]["country"]["flag"]}</h2> : <h1> Cargando datos</h1>
              <ImgCardFlag src={Data["city"]["state"]["country"]["flag"]} className="icosr" />
            ) : (
              <h1> Cargando datos</h1>
            )}
            <br />
            {Data.token && <Donaciones />}
            {/* </Link> */}
          </Fragment>
        ) : typeof Data === "string" ? (
          <h1> {Data}</h1>
        ) : (
          <h1> Cargando datos</h1>
        )}
      </PrimerLeft>
      <PrimerRight>
        <ImgCard src={Data.img} className="icos50" />
      </PrimerRight>
    </DivContenedor>

    </Fragment> 
  );
};

export default ShelterData;
