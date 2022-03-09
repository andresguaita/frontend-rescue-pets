import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { validateFormRegister } from "../helpers/validation";
import Swal from "sweetalert2";
import Img from "../Icos/homeim5.svg";
import {
  cleanStateForm,
  getcities,
  getCountries,
  getStates,
  postAlert,
  uploadImageCloud,
} from "../Redux/Actions";
import { SelectStyle } from "../Styles/StyledFilters";

//estilos
import { Centro, DivContainer, Left, Right } from "../Styles/StyledFormTransit";
import Navbar from "./Navbar";

const FormAlerta = () => {
  const dispatch = useDispatch();
  const navegate = useNavigate();
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
 

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    direction: "",
    description: "",
    image: "http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png",
    shelterId:''
  });
  const allCountries = useSelector((state) => state.countries);
  const statesXcountry = useSelector((state) => state.states);
  const citiesXstate = useSelector((state) => state.cities);
  const shelter = useSelector((state) => state.shelter);
 
  

  useEffect(() => {
    dispatch(getCountries());
    return () => dispatch(cleanStateForm());
  }, [dispatch]);

  const uploadImage = async (e) => {
 
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      formData.append("upload_preset", "rescuePetsUpload");

      let link = await dispatch(uploadImageCloud(formData));
      setInput({
        ...input,
        image: link,
      });
    
  };

  function validate(input) {
    let errors = {};
    if (!input.direction) {
      errors.direction = "Completar dirección";
    }
    if (!input.description) {
      errors.description = "Completar descripción";
    }
    else if( !input.shelterId){
        errors.shelterId="Selecciona un refugio"
    }

    return errors;
  }

  //Inputs
  function handleInputChange(e) {
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

 

  const handleSelectCountry = (e) => {
    setInput({
      ...input,
      country: e.target.value,
    });
    dispatch(getStates(e.target.value));
  };

  const handleSelectState = (e) => {
    setInput({
      ...input,
      state: e.target.value,
    });
    dispatch(getcities(e.target.value));
  };

  const handleSelectCity = (e) => {
    setInput({
      ...input,
      cityId: e.target.value,
    });
    setErrors(
      validateFormRegister({
        ...input,
        cityId: e.target.value,
      })
    );
  };

  const handleSelectShelter = (e) => {
   setInput({
       ...input,
       shelterId:e.target.value
   })
  };


  function handleSubmit(e) {
    if (input.direction === "") {
      e.preventDefault();
      alert("Completar formulario correctamente");
    } else {
      e.preventDefault();
     dispatch(postAlert(input));
     Swal.fire('Ok!','Alerta Enviada!', 'success')
      setInput({
        direction: "",
        description: "",
        image: "",
        shelterId:''
      });
 
      // navegate("/home");
    }
  }

  return (
 <> <Navbar />  
    <Fragment>
          
      <Centro>
        <br></br>
        <h1>Formulario de Alerta</h1>
        <h1>Envíanos los datos necesarios para enviar nuestra ayuda</h1>
        <DivContainer>
          <Left>
            <form className="formulario">
              <legend>Localización</legend>
              <div className="campo">
                <label>País: </label>
                <SelectStyle onChange={handleSelectCountry}>
                  <option disabled selected>
                    -- Seleccione --
                  </option>
                  {allCountries?.map((el) => (
                    <option value={el.id} key={el.id}>
                      {el.country}
                    </option>
                  ))}
                </SelectStyle>
              </div>
              <div className="campo">
                <label>Estado: </label>
                <SelectStyle onChange={handleSelectState}>
                  <option disabled selected>
                    -- Seleccione --
                  </option>
                  {statesXcountry?.map((el) => (
                    <option value={el.id} key={el.id}>
                      {el.state}
                    </option>
                  ))}
                </SelectStyle>
              </div>
              <div className="campo">
                <label>Ciudad: </label>
                <SelectStyle id="ciudades" onChange={handleSelectCity}>
                  <option disabled selected>
                    -- Seleccione --
                  </option>
                  {citiesXstate?.map((el) => (
                    <option value={el.id} key={el.id}>
                      {el.city}
                    </option>
                  ))}
                </SelectStyle>
              </div>
              {errors.cityId && <p>{errors.cityId}</p>}
              <div className="campo">
                <label>Nombre del refugio: </label>
                <SelectStyle name="shelterId" onChange={(e) => handleSelectShelter(e)}>
                  <option value={"Refugios"}>Refugios</option>
                  {shelter.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.name}
                    </option>
                  ))}
                </SelectStyle>
              </div>
              <br /> <br /> <br />
              <div>
                <label>Dirección: </label>
                <input
                  type="text"
                  className="inputForm"
                  value={input.direction}
                  name="direction"
                  onChange={(e) => handleInputChange(e)}
                  placeholder="(Barrio, calle y numero)"
                />

                {errors.direction && <p> {errors.direction} </p>}
                <br />
              </div>
              <div>
              <label>Descripción: </label>
                <input
                  type="text"
                  className="inputForm"
                  value={input.description}
                  name="description"
                  onChange={(e) => handleInputChange(e)}
                  placeholder="Descripción breve del estado actual del animal"
                />

                {errors.description && <p> {errors.description} </p>}
              </div>
              <>
              <div>
                {" "}
                <br /> <br />
                <label>Imagen: </label>
                <input
                  className="custom-file-upload"
                  type="file"
                  name="file"
                  placeholder="Inserte Imagen"
                  onChange={(e) => {
                    uploadImage(e);
                  }}
                />
                 <p style={{textAlign:"center"}}>
                Formatos aceptados: JPG, JPEG, PNG, SVG 
              </p>
                </div>
              </>
              <button type="submit" onClick={handleSubmit}>
                Enviar Alerta
              </button>
            </form>
          </Left>
          <Right>
            <img src={Img} className="icos40"></img>
          </Right>
        </DivContainer>{" "}
        <br /> <br />{" "}
      </Centro>
    </Fragment>
    </>
  );
};

export default FormAlerta;
