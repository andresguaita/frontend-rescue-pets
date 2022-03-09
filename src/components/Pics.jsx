import React, {Fragment} from "react";
import {StyledCardContainer, StyledCard, ImgCard} from "../Styles/StyledPics";
import {useSelector, useDispatch} from "react-redux";
import { UpdatePrimerPic } from "../Redux/Actions/index.js";

export default function Pics({imagenes}) {

    const dispatch = useDispatch();
    const picprincipal = useSelector((state) => state.pic_one);
    
 const handleClick = (ep, imagen) => {
    dispatch(UpdatePrimerPic (imagen));
    console.log(imagen , "imagen")
  };
 

    let im = imagenes[0].image;

    let b = JSON.stringify(im);
   
    b = b.replace(/\\/g, '');
    b = b.replace("{", '');
    b = b.replace("}", '');
    b = b.replace('"', '');
    b =  b.split('"').join('')
    b =  b.split('\"').join('')
    b =  b.split(']').join('')
    b =  b.split('[').join('')
    b = b.replace('"', '');
    b.replace("'\'", '');
    b = b.split(',');
    console.log(b, "DATA RECIBIDA PICS")
   

   

    return (
        <Fragment>

            <StyledCardContainer> {
                b.length  && b != undefined ? b.map((item) => <StyledCard>
                    {console.log(item)}
                    <ImgCard src={
                        item
                    } name={item} onClick={(e) => handleClick(e, item)} />
                </StyledCard>) : ""
            } </StyledCardContainer>
        </Fragment>
    )
}
