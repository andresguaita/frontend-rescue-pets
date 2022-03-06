import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Routes, Route } from "react-router-dom";
import { getShelterDetail, getPetsFilter,getPetByShelter } from "../Redux/Actions/index.js";

// componentes
import ShelterInfo from "./ShelterInfo.jsx";
import ShelterDetailNav from "./ShelterDetailNav";
import FormTransit from "./FormTransit.jsx";

// estilos
import { StyledDiv } from "../Styles/StyledShelterDetails";
import { APIGATEWAY_URL } from "../utils/constant.js";

const ShelterDetail = () => {

  let { id } = useParams();
  const dispatch = useDispatch();
  let Data = useSelector((state) => state.shelterDetail);
  let cityId= Data.cityId

  const [input, setInput] = useState({})
 

  const link = `${APIGATEWAY_URL}/pets/${cityId}?shelterId=${id}`

  useEffect(() => {
    dispatch(getShelterDetail(id))
  }, [id]);

  useEffect(() => {
    if (cityId){
      let query = `${link}&`
          Object.entries(input).forEach(([key,value])=> {
               query = `${query}${[key]}=${[value]}&`
          
          })  
          dispatch(getPetsFilter(query))
    }
    
  }, [cityId, input, dispatch]);

  const pets = useSelector((state) => state.petsfilter)
  return (
    <StyledDiv>
      <ShelterDetailNav id={id}  />
      <Routes>
        <Route path="/" element={<ShelterInfo Data={Data} pets = {pets} input={input} setInput={setInput}/>} />
        <Route path="/form" element={<FormTransit id={id}/>} />
      </Routes>
    </StyledDiv>
  ); 
};

export default ShelterDetail;
