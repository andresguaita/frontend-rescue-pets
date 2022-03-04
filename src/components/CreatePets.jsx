import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { APIGATEWAY_URL } from '../utils/constant';
import {
  postPets,
  getShelters,
  gettTemperaments,
  getAllSpecies,
  getAllAges,
  getAllPetStatus,
  getGenres,
  ModalDashboardOpen,
  uploadImageCloud,
  getPetsForDashboard
} from "../Redux/Actions/index";

import { DivContainer } from "../Styles/StyledCreatePets";

import { StyleButton } from "../Styles/StyledButtons.js";
export function CreatePets() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  

  useEffect(() => {
    dispatch(getAllSpecies());
  }, [dispatch]);

  const Allspecies = useSelector((state) => state.allspecies);

  useEffect(() => {
    dispatch(getShelters());
  }, [dispatch]);

  const Shelters = useSelector((state) => state.Shelters);

  useEffect(() => {
    dispatch(gettTemperaments());
  }, [dispatch]);

  const ttemperaments = useSelector((state) => state.ttemperaments);

  useEffect(() => {
    dispatch(getAllAges());
  }, [dispatch]);

  const AllAges = useSelector((state) => state.allAges);

  useEffect(() => {
    dispatch(getAllPetStatus());
  }, [dispatch]);

  const Status = useSelector((state) => state.petStatus);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const Genres = useSelector((state) => state.allGenres);

  const shelterID = useSelector(state => state.ShelterAndCityId);

  const [state, setState] = useState({
    name: "",
    sterilization: "",
    weight: "",
    description: "",
    image: "",
    speciesId: "",
    shelterId: '',
    temperamentId: "",
    ageId: "",
    petStatusId:  '',
    genreId: "",
  });

  const uploadImage = async (e) => {
    const formData = new FormData()
    formData.append("file", e.target.files[0])
    formData.append("upload_preset", "rescuePetsUpload")

    let link = await dispatch(uploadImageCloud(formData))
    setState({
      ...state,
      image:link
    })
  
  }

  const handleChanges = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectBoolean = (e) => {
    setState({
      ...state,
      sterilization: e.target.value,
    });
  };

  const handleSelectSpecies = (e) => {
    setState({
      ...state,
      speciesId: e.target.value,
    });
  };

  const handleSelectShelter = (e) => {
    setState({
      ...state,
      shelterId: e.target.value,
    });
  };

  const handleSelectTemperament = (e) => {
    setState({
      ...state,
      temperamentId: e.target.value,
    });
  };

  const handleSelectAge = (e) => {
    setState({
      ...state,
      ageId: e.target.value,
    });
  };

  const handleSelectState = (e) => {
    setState({
      ...state,
      petStatusId: e.target.value,
    });
  };

  const handleSelectGenres = (e) => {
    setState({
      ...state,
      genreId: e.target.value,
    });
  };

  const handleSelectImg = (e) => {
    setState({
      ...state,
      image: e.target.value,
    });
  };

  const routeInfo = useSelector(state => state.ShelterAndCityId)
  const route = `${APIGATEWAY_URL}/pets/${routeInfo.cityId}?shelterId=${routeInfo.shelterId}`

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postPets(state));
    dispatch(ModalDashboardOpen ("icos"))
    setState({name:'',sterilization:'',weight: '',description: '',image:'',speciesId:'',shelterId:'',
            temperamentId:'',ageId:'',petStatusId:'',genreId:''})

    alert('¡La mascota fue creada con exito!');
    // navigate('/dashboard/pets');
    dispatch(getPetsForDashboard(route))
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
        />
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
        </select>
        <br />
        <br />
        <input
          type="text"
          placeholder="Escriba el  Peso"
          name="weight"
          value={state.weight}
          onChange={handleChanges}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Escriba Descripción"
          name="description"
          value={state.description}
          onChange={handleChanges}
        />
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
        </select>
        <br />
        <br />
        <select onChange={handleSelectShelter}>
          <option disabled selected>
            -- Seleccione Refugio --
          </option>
          {Shelters?.map((e) => (
            <option value={e.id} key={e.id}>
              {e.name}
            </option>
          ))}
        </select>
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
        </select>
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
        </select>
        <br />
        <br />
        <select onChange={handleSelectState}>
          <option disabled selected>
            -- Seleccione Estado --
          </option>
          {Status?.map((e) => (
            <option value={e.id} key={e.id}>
              {e.status}
            </option>
          ))}
        </select>
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
        </select>
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
          />
          {loading ? (
            <h3>Cargando Imagenes... </h3>
          ) : (
            <img src={image} style={{ width: "300px" }} />
          )}
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
