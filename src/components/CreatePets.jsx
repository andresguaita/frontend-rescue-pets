import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { APIGATEWAY_URL } from '../utils/constant';
import {
  postPets,
  getShelters,
  gettTemperaments,
  getAllSpecies,
  getAllAges,
  /* getAllPetStatus, */
  getGenres,
  ModalDashboardOpen,
  uploadImageCloud,
  getPetsForDashboard
} from "../Redux/Actions/index";

import { DivContainer } from "../Styles/StyledCreatePets";

import { StyleButton } from "../Styles/StyledButtons.js";
export function CreatePets() {
  const dispatch = useDispatch();

  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getAllSpecies());
  }, [dispatch]);

  const Allspecies = useSelector((state) => state.allspecies);

  useEffect(() => {
    dispatch(getShelters());
  }, [dispatch]);

  const Shelters = useSelector((state) => state.ShelterAndCityId.shelterId); 

  useEffect(() => {
    dispatch(gettTemperaments());
  }, [dispatch]);

  const ttemperaments = useSelector((state) => state.ttemperaments);

  useEffect(() => {
    dispatch(getAllAges());
  }, [dispatch]);

  const AllAges = useSelector((state) => state.allAges);

  // useEffect(() => {
  //   dispatch(getAllPetStatus());
  // }, [dispatch]);

  // const Status = useSelector((state) => state.petStatus[0]?.id); 

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const Genres = useSelector((state) => state.allGenres);

  function validate (state){
    let errors = {};
    if(!state.name){
      errors.name = '*';
    } else if(!state.sterilization){
      errors.sterilization = '*'
    } else if(!state.weight){
      errors.weight = '*'
    } else if(!state.description){
      errors.description = '*'
    } else if(!state.image){
      errors.image = '*'
    } else if(!state.speciesId){
      errors.speciesId = '*'
    } else if(!state.temperamentId){
      errors.temperamentId = '*'
    } else if(!state.ageId){
      errors.ageId = '*'
    } else if(!state.genreId){
      errors.genreId = '*'
    }
    return errors;
  };

  const [errors, setErrors] = React.useState({});
  const [state, setState] = useState({
    name: "",
    sterilization: "",
    weight: "",
    description: "",
    image: "",
    speciesId: "",
    shelterId: Shelters,
    temperamentId: "",
    ageId: "",
    petStatusId:  1,
    genreId: "",
  });

  // console.log('errors: ', errors);
  // console.log('state: ', state);

  const uploadImage = async (e) => {
    if(state.image.length < 5) {
      const formData = new FormData()
      formData.append("file", e.target.files[0])
      formData.append("upload_preset", "rescuePetsUpload")
  
      let link = await dispatch(uploadImageCloud(formData))
      setState({
        ...state,
        image: [...state.image, link]
      })
      setErrors(validate({
        ...state,
        image: e.target.value
      }))
    } else {
      alert('No se pueden cargar mas de 5 Imagenes.');
    }
  }

  const handleChanges = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
    setErrors(validate({
      ...state,
      [e.target.name]: e.target.value
    }))
  };

  const handleSelectBoolean = (e) => {
    setState({
      ...state,
      sterilization: e.target.value,
    })
    setErrors(validate({
      ...state,
      sterilization: e.target.value
    }))
  };

  const handleSelectSpecies = (e) => {
    setState({
      ...state,
      speciesId: e.target.value,
    })
    setErrors(validate({
      ...state,
      speciesId: e.target.value
    }))
  };

  const handleSelectTemperament = (e) => {
    setState({
      ...state,
      temperamentId: e.target.value,
    })
    setErrors(validate({
      ...state,
      temperamentId: e.target.value
    }))
  };

  const handleSelectAge = (e) => {
    setState({
      ...state,
      ageId: e.target.value,
    })
    setErrors(validate({
      ...state,
      ageId: e.target.value
    }))
  };

  const handleSelectGenres = (e) => {
    setState({
      ...state,
      genreId: e.target.value,
    })
    setErrors(validate({
      ...state,
      genreId: e.target.value
    }))
  };

  const routeInfo = useSelector(state => state.ShelterAndCityId)
  const route = `${APIGATEWAY_URL}/pets/${routeInfo.cityId}?shelterId=${routeInfo.shelterId}`

  const handleSubmit = (e) => {
    if(!state.name || !state.sterilization || !state.weight || !state.description || !state.image ||
      !state.speciesId || !state.temperamentId || !state.ageId || !state.genreId){
        e.preventDefault();
        alert('¡Debe completar todos los campos para crear una Mascota!');
      } else {
        e.preventDefault();
        dispatch(postPets(state));
        dispatch(ModalDashboardOpen ("icos"))
        setState({name:'',sterilization:'',weight: '',description: '',image:'',speciesId:'',shelterId:'',
                temperamentId:'',ageId:'',petStatusId:'',genreId:''})
    
        alert('¡La mascota fue creada con exito!');
        dispatch(getPetsForDashboard(route));
      }
  };

  function handleClickCencel(e) {
    e.preventDefault();
    dispatch(ModalDashboardOpen("icos"));
  }
  return (
    <DivContainer>
      <form onSubmit={handleSubmit}>
        <br />
        <br />
        <input
          type="text"
          placeholder="Nombre de mascota"
          name="name"
          value={state.name}
          onChange={handleChanges}
        />{errors.name&&(<p>{errors.name}</p>)}
        <br /> <br />
        <select onChange={handleSelectBoolean}>
          <option disabled selected>
            ¿Esterilizado/a?
          </option>
          <option name="true" value={true}>
            Si
          </option>
          <option name="false" value={false}>
            No
          </option>
        </select>{errors.sterilization&&(<p>{errors.sterilization}</p>)}
        <br />
        <br />
        <input
          type="text"
          placeholder="Escriba el  Peso"
          name="weight"
          value={state.weight}
          onChange={handleChanges}
        />{errors.weight&&(<p>{errors.weight}</p>)}
        <br />
        <br />
        <input
          type="text"
          placeholder="Escriba Descripción"
          name="description"
          value={state.description}
          onChange={handleChanges}
        />{errors.description&&(<p>{errors.description}</p>)}
        <br />
        <br />
        <select onChange={handleSelectSpecies}>
          <option disabled selected>
            -- Seleccione Especie --
          </option>
          {Allspecies?.map((e) => (
            <option value={e.id} key={e.id}>
              {e.specie}
            </option>
          ))}
        </select>{errors.speciesId&&(<p>{errors.speciesId}</p>)}
        <br />
        <br />
        {/* <select onChange={handleSelectShelter}>
          <option disabled selected>
            -- Seleccione Refugio --
          </option>
          {Shelters?.map((e) => (
            <option value={e.id} key={e.id}>
              {e.name}
            </option>
          ))}
        </select> */}
        <br />
        <br />
        <select onChange={handleSelectTemperament}>
          <option disabled selected>
            -- Seleccione Temperamento --
          </option>
          {ttemperaments?.map((e) => (
            <option value={e.id} key={e.id}>
              {e.temperament}
            </option>
          ))}
        </select>{errors.temperamentId&&(<p>{errors.temperamentId}</p>)}
        <br />
        <br />
        <select onChange={handleSelectAge}>
          <option disabled selected>
            -- Seleccione Edad --
          </option>
          {AllAges?.map((e) => (
            <option value={e.id} key={e.id}>
              {e.age}
            </option>
          ))}
        </select>{errors.ageId&&(<p>{errors.ageId}</p>)}
        <br />
        <br />
        {/* <select onChange={handleSelectState}>
          <option disabled selected>
            -- Seleccione Estado --
          </option>
          {Status?.map((e) => (
            <option value={e.id} key={e.id}>
              {e.status}
            </option>
          ))}
        </select> */}
        <br />
        <br />
        <select onChange={handleSelectGenres}>
          <option disabled selected>
            -- Seleccione Genero--
          </option>
          {Genres?.map((e) => (
            <option value={e.id} key={e.id}>
              {e.genre}
            </option>
          ))}
        </select>{errors.genreId&&(<p>{errors.genreId}</p>)}
        <>
          {" "}
          <br /> <br />
          <input
            className="custom-file-upload"
            type="file"
            multiple="multiple"
            name="file"
            placeholder="Inserte Imagen"
            onChange={(e)=>{uploadImage(e)}}
          />{errors.image&&(<p>{errors.image}</p>)}
          {`${state.image.length}/5`}
        </>
        <br /> <br />
        <StyleButton type="submit">¡Crear Mascota!</StyleButton>{" "}
        <StyleButton onClick={(event) => handleClickCencel(event)}>
          Cancelar
        </StyleButton>
      </form>
    </DivContainer>
  );
}

export default CreatePets;
