import React, {Fragment, useEffect, useState}  from 'react';

import GraficoStatisPais from "./GraficoStatisPais"
import CuadroStatisGral from './CuadroStatisGral';

import {
  StyledDetails,
  StyledDetailsLeft,
  StyledDetailsRight,
} from "../Styles/StyledDetails.js";

export const StatisHomeAdm = () => {
 
  return (
    <Fragment>
        <StyledDetails>
            <StyledDetailsRight>
                <h1>Cantidad de Refugios por País</h1>
                <br/>
                <GraficoStatisPais />
            </StyledDetailsRight>
            
              <StyledDetailsLeft> 
                <CuadroStatisGral />             
               </StyledDetailsLeft>
         </StyledDetails>
     </Fragment>)
  
}

