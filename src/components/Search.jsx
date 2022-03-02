import React from "react";
import { useNavigate } from "react-router-dom";
import {getSearchShelters} from '../Redux/Actions';
import { useDispatch } from "react-redux";
import {IoSearchCircleSharp
} from "react-icons/io5";
import { StyleInputMin } from "../Styles/StyledSearch.js";
import {StyleButton, StyleButtonMini2} from '../Styles/StyledButtons.js';
import { Fragment } from "react";


export function SearchBar() {
const dispatch = useDispatch();
const navigate = useNavigate();
const [name, setName] = React.useState();

  const handleInputChange = (e) => (
      setName(e.target.value)
);
   
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getSearchShelters(name));  
    setName('');
    navigate('/Shelters');
};

    return (
    <Fragment>
        <form onSubmit={handleSubmit} >
        < StyleInputMin   name='buscar' type='text' placeholder='Buscar' value={name} onChange={handleInputChange}/>
        <StyleButtonMini2  type="submit"><IoSearchCircleSharp
/></StyleButtonMini2> </form>
        </Fragment>
  
    );
};

export default SearchBar;