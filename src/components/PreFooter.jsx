import React from 'react'
import {Fragment} from 'react';
import {StyledPreFooter, StyledCard} from "../Styles/StyledPreFooter.js";
import {StyleButton, StyleButtonMini} from '../Styles/StyledButtons.js';
import {Link} from "react-router-dom";
export default function PreFooter() {
    return (
        <Fragment>
            {/* <div className='ok'>  Fondo anterior*/}
            
                <StyledPreFooter>
                    <StyledCard>
                        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit</h1>
                        <br/>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus autem dolor inventore</p>
                        <br/>
                        <img src="" className="img"/>
                        <Link to="/">
                            <StyleButtonMini>Opción 1</StyleButtonMini>
                        </Link>

                    </StyledCard>

                    <StyledCard>
                        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit</h1>
                        <br/>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus autem dolor inventore</p>
                        <br/>
                        <img src="" className="img"/>
                        <Link to="/">
                            <StyleButtonMini>Opción 1</StyleButtonMini>
                        </Link>

                    </StyledCard>

                    <StyledCard>
                        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit</h1>
                        <br/>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus autem dolor inventore</p>
                        <br/>
                        <img src="" className="img"/>
                        <Link to="/">
                            <StyleButtonMini>Opción 1</StyleButtonMini>
                        </Link>

                    </StyledCard>

                </StyledPreFooter>
          
        </Fragment>

    )
}


{ /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#63ac44" fill-opacity="2" d="M0,0L34.3,21.3C68.6,43,137,85,206,106.7C274.3,128,343,128,411,117.3C480,107,549,85,617,64C685.7,43,754,21,823,48C891.4,75,960,149,1029,149.3C1097.1,149,1166,75,1234,48C1302.9,21,1371,43,1406,53.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
</svg> */
}
