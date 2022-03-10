import React, { useEffect } from 'react'
import {Fragment} from 'react';
import {StyledPreFooter, StyledCard} from "../Styles/StyledPreFooter.js";
import {StyleButton, StyleButtonMini} from '../Styles/StyledButtons.js';
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getCountShelter, getCountAdopted1, getCountAdopted11 } from '../Redux/Actions';

import Im1 from "../Icos/health.png";

import Im2 from "../Icos/espe.png";
import Img3 from "../Icos/new.png";

export default function PreFooter() {
    const dispatch = useDispatch();

var auxDatos=[];

const countShelters = useSelector(state => state.countShelters)
const countAdopted1 = useSelector(state => state.countAdopted1)
const countAdopted11 = useSelector(state => state.countAdopted11)

const shelter=countShelters.count
const adopted1=countAdopted1.count
const adopted2=countAdopted11.count

if (shelter){
  auxDatos.push(shelter)
}
if (adopted1){
  auxDatos.push(adopted1)
}
if (adopted2){
  auxDatos.push(adopted2)
}

const estado=auxDatos

useEffect(() => {
  dispatch(getCountShelter());
  dispatch(getCountAdopted1());
  dispatch(getCountAdopted11());
},[])
    return (
        <Fragment>
            {/* <div className='ok'>  Fondo anterior*/}
            
                <StyledPreFooter>
                    <StyledCard>
                        <h1>Mascotas Rescatadas</h1>
                        <br/>
                        <p>En esta plataforma se encuentran: </p>
                        <br/>
                        <img src={Im1} className="img"/><br></br>
                        <Link to="/">
                            <StyleButtonMini>{estado[0]}</StyleButtonMini>
                        </Link>
                        <p>Refugios registrados. ¡Una esperanza más para ellos!.</p><br></br>
                    </StyledCard>

                    <StyledCard>
                        <h1>Mascotas Adoptadas</h1>
                        <br/>
                        <p>Gracias a esta plataforma:</p>
                        <br/>
                        <img src={Im2} className="img"/><br></br>
                        <Link to="/">
                            <StyleButtonMini>{estado[2]}</StyleButtonMini>
                        </Link>
                        <p>Mascotas fueron adoptados.</p>
                        <center>Frente al abandono de animales, la adopción de mascotas es la mejor forma de darles una segunda oportunidad y una familia.</center><br></br>
                    </StyledCard>

                    <StyledCard>
                        <h1>Esperan Adopción</h1>
                        <br/>
                        <p>En esta plataforma:</p>
                        <br/>
                        <img src={Img3} className="img"/><br></br>
                        <Link to="/">
                            <StyleButtonMini>{estado[1]}</StyleButtonMini>
                        </Link>
                        <p>Adorables mascotas ¡ESPERAN POR TI!.</p><br></br>

                    </StyledCard>

                </StyledPreFooter>
          
        </Fragment>

    )
}


{ /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#63ac44" fill-opacity="2" d="M0,0L34.3,21.3C68.6,43,137,85,206,106.7C274.3,128,343,128,411,117.3C480,107,549,85,617,64C685.7,43,754,21,823,48C891.4,75,960,149,1029,149.3C1097.1,149,1166,75,1234,48C1302.9,21,1371,43,1406,53.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
</svg> */
}
