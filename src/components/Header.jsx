import React, {Fragment} from "react";
import {StyledImg, StyledHeaderContainer, StyledLeft, StyledRight} from '../Styles/StyledHeader.js';
import {StyleButton} from '../Styles/StyledButtons.js';
import {Link} from "react-router-dom";
import pets1 from "../Icos/pets2-removebg-preview.png"


export default function Header() {
    return (
        <Fragment>


            <StyledHeaderContainer>
                <StyledLeft>
                    <h1 style={{fontStyle:"italic", marginLeft:"4rem"}}>"Respetar a los animales es una obligación, 
                        amarlos es un privilegio"
                    </h1>
                </StyledLeft>

                <StyledRight>
                    <StyledImg src={pets1}/>


                </StyledRight>

            </StyledHeaderContainer>

        </Fragment>
    );
}
