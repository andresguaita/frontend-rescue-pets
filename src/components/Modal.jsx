import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyledModal ,Styledselect } from "../Styles/StyledModal.js";
import { StyleButton } from "../Styles/StyledButtons.js";
import { getTemperaments, getCityId, getAges,getStatus, getSpecies, getFilterShelters } from "../Redux/Actions/index.js";



import {
    getCountries,
    getStates,
    getcities,
    getPetsFilter
  } from "../Redux/Actions/index.js";
import { APIGATEWAY_URL } from "../utils/constant.js";
  
  const Modal = ({setidcity, estado, cambiarEstado}) => {

  

    const [params, setParams] = useState(`${APIGATEWAY_URL}/pets/`)

    const allCountries = useSelector((state) => state.countries);
    const statesXcountry = useSelector((state) => state.states);
    const citiesXstate = useSelector((state) => state.cities);
  
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries());
        
      }, [dispatch]);

      const handleSelectCountry = (e) => {
        dispatch(getStates(e.target.value));
      };
    
      const handleSelectState = (e) => {
        dispatch(getcities(e.target.value));
      };
    
      const handleSelectCity = async (e) => {
        setidcity(e.target.value)
        const paramLink = `${params}${e.target.value}`
        await dispatch(getPetsFilter(paramLink))
        await dispatch(getTemperaments())
        await dispatch(getAges())
        await dispatch(getStatus())
        await dispatch(getCityId(e.target.value))
        await dispatch(getSpecies())
        await dispatch(getFilterShelters())
      };

      return ( 
        <StyledModal>

        { estado &&

          <form>
              <h2>Elegí tu localización</h2>
              <span>Así podremos mostrarte las mascotas en adopción cerca tuyo</span><br/><br/>

              <div className="campo">
            <label>País: </label>
            <Styledselect onChange={handleSelectCountry}>
              <option disabled selected>
                -- Seleccione --
              </option>
              {allCountries?.map((el) => (
                <option value={el.id} key={el.id}>
                  {el.country}
                </option>
              ))}
            </Styledselect><br/><br/><br/><br/>
          </div>

          <div className="campo">
            <label>Estado: </label>
            <Styledselect onChange={handleSelectState}>
              <option disabled selected>
                -- Seleccione --
              </option>
              {statesXcountry?.map((el) => (
                <option value={el.id} key={el.id}>
                  {el.state}
                </option>
              ))}
            </Styledselect><br/><br/><br/>
          </div>

          <div className="campo">
            <label>Ciudad: </label>
            <Styledselect id="ciudades" onChange={handleSelectCity}>
              <option disabled selected>
                -- Seleccione --
              </option>
              {citiesXstate?.map((el) => (
                <option value={el.id} key={el.id}>
                  {el.city}
                </option>
              ))}
           </Styledselect><br/><br/><br/>
          </div>
          <StyleButton
          value="Ver Mascotas"
          onClick={()=>cambiarEstado(!estado)}
          >Ver Mascotas</StyleButton>
          
          </form>
  }
  </StyledModal>
      )
  }

  export default Modal