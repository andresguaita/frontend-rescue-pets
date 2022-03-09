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
                    <h1>"Respetar a los animales es una obligación, 
                        amarlos es un privilegio"
                    </h1>
                </StyledLeft>

                <StyledRight>
                    <StyledImg src={HomeImage}/>


                </StyledRight>

            </StyledHeaderContainer>

        </Fragment>
    );
}
