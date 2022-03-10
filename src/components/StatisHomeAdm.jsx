import React, { Fragment, useEffect, useState } from "react";

import GraficoStatisPais from "./GraficoStatisPais";
import CuadroStatisGral from "./CuadroStatisGral";
import {StyledHeaderAdmin} from "../Styles/StyledHeaderAdmin"

import {
  StyledDetails2,
  StyledDetailsLeft,
  StyledDetailsRight,
} from "../Styles/StyledDetails.js";

export const StatisHomeAdm = () => {
  return (
    <Fragment>
      <StyledHeaderAdmin>
        <h1>Estadísticas</h1>
      </StyledHeaderAdmin>
      <StyledDetails2>
        <StyledDetailsRight>
          <h1>Cantidad de Refugios por País</h1>
          <br />
          <GraficoStatisPais />
        </StyledDetailsRight>

        <StyledDetailsLeft>
          <CuadroStatisGral />
        </StyledDetailsLeft>
      </StyledDetails2>
    </Fragment>
  );
};
