import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFormAdoption,
  postRequestTransit,
  findOrCreateProfileUser,
  sendEmailForms,
  sendEmailFormstoShelter
} from "../Redux/Actions/index";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { validateForm } from "../helpers/validation";
import TerminosyCondiciones from "./TerminosyCondiciones";

//estilos
import { DivContainer } from "../Styles/StyledFormTransit";

const FormTransit = ({ id,shelterName }) => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const form = useSelector((state) => state.formAdoption);
  

  const [input, setInput] = useState([]);
  const [profileData, setProfileData] = useState({
    name: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    email: "",
    roleId: "4",
  });

  const [errors, setErrors] = useState({});

  const [Modal, cambiarEstadoModal] = useState(false);

  useEffect(() => {
 
      dispatch(getFormAdoption(id, 1));

  }, []);

  function handleChangeProfile(event) {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validateForm({
        ...profileData,
        [event.target.name]: event.target.value,
      })
    );
  }

  function handleChek(e){
    if(e.target.checked) {
      setErrors({
          ...errors,
          check : e.target.value
      })
  } else{
    setErrors({
      ...errors,
      check : !e.target.value
  })
  }
  }

  function handleChangeQuestions(event) {
    if (input.length === 0) {
      setInput([
        ...input,
        { idquestion: Number(event.target.name), answer: event.target.value },
      ]);
    } else {
      input.map((e, index) => {
        if (Number(e.idquestion) === Number(event.target.name)) {
          input[index].answer = event.target.value;
          return e;
        } else if (
          !input.find((e) => Number(e.idquestion) === Number(event.target.name))
        ) {
          setInput([
            ...input,
            {
              idquestion: Number(event.target.name),
              answer: event.target.value,
            },
          ]);
        }
      });
    }
  }

  async function handleClick(event) {
    event.preventDefault();
    let profile = await dispatch(findOrCreateProfileUser(profileData));

    let payload = {
      idform: form[0].id,
      answer: input,
      profileId: profile.foundProfile
        ? profile.foundProfile.id
        : profile.createProfile.id,
    };

    dispatch(postRequestTransit(payload));

    let data = {
      userMail: profileData.email, 
      ShelterName: shelterName,
      type:1
    }
  
    dispatch(sendEmailForms(data))
    
    let info = {
      userMail: profileData.email, 
      type:1
    }
    dispatch(sendEmailFormstoShelter(info))

    Swal.fire(
      "Genial!",
      "Registro realizado correctamente. Si has sido seleccionado pronto nos comunicaremos contigo",
      "sucess"
    );
    setInput([]);
    history(`/shelters/${form[0].shelterId}`);
    
  }

  return (
    <DivContainer>
      <h1>FORMULARIO DE TRÁNSITO</h1>
      <p>Estas a un paso de cambiar una vida</p>
      <form className="formulario">
        <div>
          <label>Nombre obligatorio</label>
          <input
            type="text"
            className="inputForm"
            value={profileData.name}
            name="name"
            onChange={(e) => handleChangeProfile(e)}
          />
        </div>

        <div>
          <label>Apellido</label>
          <input
            type="text"
            className="inputForm"
            value={profileData.lastName}
            name="lastName"
            onChange={(e) => handleChangeProfile(e)}
          />
        </div>

        <div>
          <label>Whastapp</label>
          <input
            type="tel"
            className="inputForm"
            value={profileData.phoneNumber}
            name="phoneNumber"
            onChange={(e) => handleChangeProfile(e)}
          />
        </div>

        <div>
          <label>Dirección</label>
          <span>dirección, ciudad, provincia/estado</span>
          <input
            type="text"
            className="inputForm"
            value={profileData.address}
            name="address"
            onChange={(e) => handleChangeProfile(e)}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            className="inputForm"
            value={profileData.email}
            name="email"
            onChange={(e) => handleChangeProfile(e)}
          />
        </div>

        {form[0] &&
          form[0].questions.map((e) => (
            <div key={e.id}>
              <label>{`${e.question}: `}</label>
              <textarea
                name={e.id}
                onChange={(event) => handleChangeQuestions(event)}
                cols="60"
                rows="5"
                required
              />
            </div>
          ))}
          <hr />
          <div>
            <label>Ver <span onClick={()=>cambiarEstadoModal(true)}>términos y condiciones</span></label>
            <span>
            <input onChange={(e)=>handleChek(e)} type="checkbox" value={true} name="Acepto" /> 
            Acepto los términos y condiciones
          </span>
          </div>
          {Modal && <TerminosyCondiciones cambiarEstado={cambiarEstadoModal}/>}
          <hr />
        <button
          type="submit"
          onClick={handleClick}
          disabled={
            !profileData.email ||
            errors.name ||
            errors.lastName ||
            errors.phoneNumber ||
            errors.address ||
            errors.email ||
            !errors.check
              ? true
              : false
          }
        >
          Enviar Formulario
        </button>
        <hr />
        <div className="errors">
          {errors.name && <p>{errors.name}</p>}
          {errors.lastName && <p>{errors.lastName}</p>}
          {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
          {errors.address && <p>{errors.address}</p>}
          {errors.email && <p>{errors.email}</p>}
        </div>
      </form>
    </DivContainer>
  );
};

export default FormTransit;
