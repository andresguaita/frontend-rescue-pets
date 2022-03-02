import React, {Fragment} from "react";
import {StyledCardContainer, StyledCard, ImgCard} from "../Styles/StyledPics";
import {useSelector, useDispatch} from "react-redux";


export default function Pics({imagenes}) {


    const picprincipal = useSelector((state) => state.pic_one);

    return (
        <Fragment>
            
            <StyledCardContainer>
                <StyledCard>
                    <ImgCard src={imagenes}/>
                </StyledCard>
                <StyledCard>
                    <ImgCard src={imagenes}/>
                </StyledCard>
                <StyledCard>
                    <ImgCard src={imagenes}/>
                </StyledCard>
                <StyledCard>
                    <ImgCard src={imagenes}/>
                </StyledCard>
                <StyledCard>
                    <ImgCard src={imagenes}/>
                </StyledCard>

            </StyledCardContainer>
        </Fragment>
    )
}
