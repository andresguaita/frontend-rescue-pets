import React, { useState, useEffect } from "react";
import { DivContainer } from "../Styles/StyledFormShelter";
import { StyleButton } from "../Styles/StyledButtons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from 'axios'


import {
  getCountries,
  getStates,
  getcities,
  cleanStateForm,
  startRegister,
  uploadImageCloud
} from "../Redux/Actions/index.js";


const FormShelter = () => {
  const allCountries = useSelector((state) => state.countries);
  const statesXcountry = useSelector((state) => state.states);
  const citiesXstate = useSelector((state) => state.cities);

  const dispatch = useDispatch();
  const history = useNavigate();

  useEffect(() => {
    dispatch(getCountries());
    return () => dispatch(cleanStateForm());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    description: "",
    country: "",
    state: "",
    cityId: "",
    address: "",
    password: "",
    role: "1",
    img: "http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png",
  });

  const uploadImage = async (e) => {
    const formData = new FormData()
    formData.append("file", e.target.files[0])
    formData.append("upload_preset", "rescuePetsUpload")

    let link = await dispatch(uploadImageCloud(formData))
    setInput({
      ...input,
      img:link
    })
  
  }

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      startRegister(
        input.name,
        input.phoneNumber,
        input.description,
        input.address,
        input.email,
        input.password,
        input.cityId,
        input.role,
        input.img
      )
    );
    setInput({
      name: "",
      email: "",
      phoneNumber: "",
      description: "",
      country: "",
      state: "",
      cityId: "",
      address: "",
      password: "",
      role: "1",
      img: "",
    });
    history("/reviewemail");
  };

  return (
    <DivContainer>
      <h2 className="text-center">Registro</h2>
      <form className="formulario" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Tus Datos</legend>

          <div className="campo">
            <label>Nombre del Refugio: </label>
            <input
              className="inputForm"
              onChange={handleChange}
              value={input.name}
              name="name"
              type="text"
              placeholder="Nombre"
            />
          </div>

          <div className="campo">
            <label>Mail: </label>
            <input
              className="inputForm"
              onChange={handleChange}
              value={input.email}
              name="email"
              type="email"
              placeholder="Mail"
            />
          </div>

          <div className="campo">
            <label>Teléfono: </label>
            <input
              className="inputForm"
              onChange={handleChange}
              name="phoneNumber"
              value={input.phoneNumber}
              type="tel"
              placeholder="Teléfono"
              required
            />
          </div>

          <div className="campo">
            <label>Su Misión: </label>
            <textarea
              onChange={handleChange}
              name="description"
              value={input.description}
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <div className="campo">
            <label>Logo</label>
            <div className="file">
              <input
                name="file"
                type="file"
                placeholder="Sube tu imagen aquí"
                onChange={(e)=>{uploadImage(e)}}
              />
              <p style={{textAlign:"center"}}>
                Formatos aceptados: JPG, JPEG, PNG, SVG 
              </p>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Localización</legend>

          <div className="campo">
            <label>País: </label>
            <select onChange={handleSelectCountry}>
              <option disabled selected>
                -- Seleccione --
              </option>
              {allCountries?.map((el) => (
                <option value={el.id} key={el.id}>
                  {el.country}
                </option>
              ))}
            </select>
          </div>

          <div className="campo">
            <label>Estado: </label>
            <select onChange={handleSelectState}>
              <option disabled selected>
                -- Seleccione --
              </option>
              {statesXcountry?.map((el) => (
                <option value={el.id} key={el.id}>
                  {el.state}
                </option>
              ))}
            </select>
          </div>

          <div className="campo">
            <label>Ciudad: </label>
            <select id="ciudades" onChange={handleSelectCity}>
              <option disabled selected>
                -- Seleccione --
              </option>
              {citiesXstate?.map((el) => (
                <option value={el.id} key={el.id}>
                  {el.city}
                </option>
              ))}
            </select>
          </div>
          <div className="campo">
            <label>Dirección: </label>
            <input
              className="inputForm"
              onChange={handleChange}
              type="text"
              placeholder="Dirección"
              value={input.address}
              name="address"
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>Contraseña</legend>

          <div className="campo">
            <label>Contraseña: </label>

            <input
              className="inputForm"
              onChange={handleChange}
              type="password"
              name="password"
              value={input.password}
              placeholder="Contraseña"
              required
            />
          </div>
        </fieldset>
        <StyleButton className="btn" type="submit" value="Registrarme">
          Registrarme
        </StyleButton>
      </form>
      {/* <img src="https://www.pngmart.com/files/4/Golden-Retriever-Puppy-PNG-File.png" alt="imagen" /> */}
    </DivContainer>
  );
};

export default FormShelter;
