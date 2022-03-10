import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFormAdoption,
  sendAdoption,
  findOrCreateProfileUser,
  sendEmailForms,
  sendEmailFormstoShelter
} from "../Redux/Actions/index";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { validateForm } from "../helpers/validation";
import TerminosyCondiciones from "./TerminosyCondiciones";
import Img from "../Icos/homeim5.svg"
//estilos
import { Centro, DivContainer, Left, Right } from "../Styles/StyledFormTransit";


const FormAdoption = () => {

  const Datos = useSelector((state) => state.petOne);
 
  
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
    if (Datos[0]) {
      let idShelter = Datos[0].shelterId;
      dispatch(getFormAdoption(idShelter, 2));
    }
  }, [Datos]);

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
    let profile = await dispatch(findOrCreateProfileUser(profileData))

    let payload = {
      idform: form[0].id,
      answer: input,
      idpet: Datos[0].id,
      profileId: profile.foundProfile ? profile.foundProfile.id : profile.createProfile.id
    }
    console.log(payload)

    dispatch(sendAdoption(payload))
    
    let data = {
      userMail: profileData.email, 
      petName: Datos[0].name,
      ShelterName: Datos[0].shelter.name,
      type:2
    }
  
    dispatch(sendEmailForms(data))
    
    let info = {
      userMail: profileData.email, 
      petName: Datos[0].name,
      type:2,
      shelterMail:Datos[0].shelter.user.email
    }
    dispatch(sendEmailFormstoShelter(info))
    
    
    setInput([])

  }

  return (
    <Fragment>
      <Centro><br></br><h1>Formulario de Adopción</h1>
    <p>Estas a un paso de cambiar una vida</p>
    <DivContainer>
   
      <Left>
     
      <form className="formulario">
     
      <br/>  <br/> <br/>
          <input
            type="text"
            className="inputForm"
            value={profileData.name}
            name="name"
            onChange={(e) => handleChangeProfile(e)}
            placeholder="Nombre obligatorio"
          />
       

        <br/>
        
          <input
            type="text"
            className="inputForm"
            value={profileData.lastName}
            name="lastName"
            onChange={(e) => handleChangeProfile(e)}
            placeholder="Apellido"
           
          />
       

       <br/>
         
          <input
            type="tel"
            className="inputForm"
            value={profileData.phoneNumber}
            name="phoneNumber"
            placeholder="Whastapp"
            onChange={(e) => handleChangeProfile(e)}
          />
        

     <br/>
          
          <input
           placeholder="Dirección (Dirección, ciudad, provincia/estado)"
            type="text"
            className="inputForm"
            value={profileData.address}
            name="address"
            
            onChange={(e) => handleChangeProfile(e)}
          />
       

       <br/>
          <input
          placeholder="Email"
            type="email"
            className="inputForm"
            value={profileData.email}
            name="email"
            onChange={(e) => handleChangeProfile(e)}
          />
       

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
       
            <label>Ver <span onClick={()=>cambiarEstadoModal(true)}>términos y condiciones</span></label>
            <span>
            <input onChange={(e)=>handleChek(e)} type="checkbox" value={true} name="Acepto" /> 
            Acepto los términos y condiciones
          </span>
          
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
      </Left>
      <Right>

<img src={Img} className="icos40"></img>
      </Right>
      </DivContainer> <br/> <br/> </Centro>
    
      </Fragment>
  );
};

export default FormAdoption;
