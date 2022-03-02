import React, {Fragment} from "react";
import {StyledImg, StyledHeaderContainer, StyledLeft, StyledRight} from '../Styles/StyledHeader.js';
import {StyleButton} from '../Styles/StyledButtons.js';
import {Link} from "react-router-dom";
import HomeImage from "../Icos/homeim0.svg"


export default function Header() {
    return (
        <Fragment>


            <StyledHeaderContainer>
                <StyledLeft>
                    <h2>Lorem ipsum dolor sectet.
                    </h2>
                    <Link to="/">
                        <StyleButton>Refugios</StyleButton>
                    </Link>
                    <Link to="/contacto">
                        <StyleButton>Mascotas</StyleButton>
                    </Link>
                </StyledLeft>

                <StyledRight>
                    <StyledImg src={HomeImage}/>


                </StyledRight>

            </StyledHeaderContainer>

        </Fragment>
    );
}
