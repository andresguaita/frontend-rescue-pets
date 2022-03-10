import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  deletePet,
  editPetFromAdmin,
  getcities,
  getCountries,
  getDataSearch,
  getGenresForAdmin,
  getHideForAdmin,
  getOnlyCitiesWithShelter,
  getOnlyStatesWithShelter,
  getPetsFilterForAdmin,
  getShelterOfPetForAdmin,
  getShelters,
  getSpecies,
  getSpeciesForAdmin,
  getStates,
  getStatusForAdmin,
  getTemperaments,
  orderById,
  orderByName,
  orderByWeight,
  setCurrentCity,
} from "../Redux/Actions/index";
import {
  StyledDashboardPetAdmin,
  StyledDivFlexAdmin,
  StyledSelectForTable,
  StyledSelectForDashboardPetAdmin,
  StyledButtonDeleteAdminPet,
  StyledButtonEditAdminPet,
  StyledInputSearch,
  StyledDivFlexColumnAdmin,
  StyledInputCheck,
  StyledButtonSearch,
  AlertPopUp,
  StyledSelectForDashboardPetEditAdmin,
} from "../Styles/StyledDashboardPetAdmin";
import { StyleButtonBack } from "../Styles/StyledButtons";
import { APIGATEWAY_URL } from "../utils/constant";
import search from "../Icos/search-solid.svg";
import { DashboardPetEditAdmin } from "./DashboardPetEditAdmin";
import { ModalDashboard } from "./ModalDashboard";
import PaginationAdmin from "./AdminPagination";
import { StyledHeaderAdmin } from "../Styles/StyledHeaderAdmin";

export const DashboardPetAdmin = () => {
  const dispatch = useDispatch();

  /// estados principales
  const countries = useSelector((state) => state.countries);
  const states = useSelector((state) => state.states);
  const cities = useSelector((state) => state.cities);
  ///  estados principales

  /// estados para filtrar ↓
  const petsearch = useSelector((state) => state.petSearchForAdmin);
  const currentCity = useSelector((state) => state.currentcity);
  const onlycitieswithshelter = useSelector(
    (state) => state.onlyCitiesWithShelter
  );
  const onlystateswithshelter = useSelector(
    (state) => state.onlyStatesWithShelter
  );
  const pets = useSelector((state) => state.petsfilterforadmin);
  const petstatus = useSelector((state) => state.statusForAdmin);
  const petspecies = useSelector((state) => state.speciesForAdmin);
  const petsgenres = useSelector((state) => state.genresForAdmin);
  const petshide = useSelector((state) => state.hideForAdmin);
  const petshelters = useSelector((state) => state.shelterOfPetForAdmin);
  /// estados para filtrar ↑

  const currentpets = petsearch;

  /// paginación ↓ ------------- ↓
  const [currentPage, setCurrentPAge] = useState(1);
  const [rowsXpage, setRowsxPage] = useState(5);

  let indexLastRow = currentPage * rowsXpage; //0
  let indexFirstRow = indexLastRow - rowsXpage; //0
  let currentRows = currentpets.slice(indexFirstRow, indexLastRow);

  const paginado = (event, pageNumber) => {
    setCurrentPAge(pageNumber);
  };
  /// paginación ↑ ------------- ↑

  /// estados locales para modificar petición ↓
  const [currentcity, setCurrentcity] = useState();
  const [link, setLink] = useState(
    `${APIGATEWAY_URL}/pets/${currentCity ? currentCity : ""}`
  );
  const [input, setInput] = useState({});
  const [search, setsearch] = useState();
  /// estados locales para modificar petición ↑

  /// estado local para modal ↓
  const [modal, setmodal] = useState(false);
  const [individualpet, setindividualpet] = useState({});
  const [removePet, setremovePet] = useState();
  const [activealert, setactivealert] = useState(false);
  const [order, setorder] = useState();
  const [orderweight, setorderweight] = useState();
  const [ordername, setordername] = useState();
  /// estado local para modal ↑

  /// obtener estados princiales ↓
  useEffect(() => {
    dispatch(getCountries());
  }, []);

  useEffect(async () => {
    dispatch(getCountries());
    dispatch(getShelters());
    if (cities.length) {
      dispatch(getOnlyCitiesWithShelter());
    }
    if (link) {
      await dispatch(getPetsFilterForAdmin(link));
    }
    if (pets) {
      await dispatch(getStatusForAdmin());
      await dispatch(getSpeciesForAdmin());
      await dispatch(getGenresForAdmin());
      await dispatch(getHideForAdmin());
      await dispatch(getShelterOfPetForAdmin());
    }
  }, [dispatch, cities, link]);

  useEffect(() => {
    dispatch(getOnlyStatesWithShelter());
    if (pets) dispatch(getStatusForAdmin());
  }, [states]);
  /// obtener estados principales ↑

  /// despacho de action para busqueda ↓
  const handleChangeSearch = (e) => {
    setsearch(e.target.value);
  };

  useEffect(() => {
    dispatch(getDataSearch(search));
  }, [search, input, link]);
  /// despacho de action para busqueda ↑

  /// setear el estado input, para hacer la petición con las querys y obtener las mascotas ↓
  useEffect(() => {
    setLink(link);
  }, [onlycitieswithshelter]);

  useEffect(async () => {
    let query = `${link}?`;
    Object.entries(input).forEach(([key, value]) => {
      query = `${query}${[key]}=${[value]}&`;
    });
    await dispatch(getPetsFilterForAdmin(query));
    if (search) await dispatch(getDataSearch(search));
  }, [input, modal, activealert]);

  const handleForGetPets = (e) => {
    let data =
      e.target.value === "true"
        ? true
        : e.target.value === "false"
        ? false
        : e.target.value;

    if (isNaN(Number(e.target.value)) && typeof data !== "boolean") {
      let temp = input;
      delete temp[e.target.name];
      setInput((input) => {
        return { ...input };
      });
      console.log(temp);
    } else {
      setInput((input) => {
        return {
          ...input,
          [e.target.name]: e.target.value,
        };
      });
    }
  };
  /// setear el estado input, para hacer la petición con las querys y obtener las mascotas ↑

  /// manejar cambios en la ubicación ↓
  const handleSubmitPrincipalLocation = (e) => {
    if (e.target.name === "Country") {
      dispatch(getStates(e.target.value));
    }
    if (e.target.name === "State") {
      dispatch(getcities(e.target.value));
    }
    if (e.target.name === "City") {
      if (e.target.value !== "not") {
        setCurrentcity(Number(e.target.value));
        dispatch(setCurrentCity(Number(e.target.value)));
        dispatch(setLink(`${APIGATEWAY_URL}/pets/${Number(e.target.value)}`));
      }
    }
  };
  /// manejar cambios en la ubicación ↑

  /// despacho de action para setear los datos a modificar ↓
  const handleGetIndividualPet = (pet) => {
    setindividualpet({
      id: pet.id,
      name: pet.name,
      hideFromDash: pet.hideFromDash,
    });
    if (modal) {
      setmodal(false);
    } else {
      setmodal(true);
    }
  };
  /// despacho de action para setear los datos a modificar ↑

  /// obtiene el valor del select para setarlo en el estado local ↓
  const handleSelect = (e) => {
    setindividualpet({
      ...individualpet,
      [e.target.name]: e.target.value == "true" ? true : false,
    });
  };
  /// obtiene el valor del select para setearlo en el estado local ↑

  /// despacha la action para editar el hide de la mascota ↓
  const handleSubmit = () => {
    dispatch(editPetFromAdmin(individualpet));
    alert("Hide editado con éxito");
  };
  /// despacha la action para editar el hide de la mascota ↑

  /// despacho de action para borrar mascota ↓
  const handleDeletePet = (petId) => {
    if (!activealert) {
      setactivealert(true);
    }
    setremovePet(Number(petId));
  };

  const handleAccept = () => {
    dispatch(deletePet(removePet));
    alert("Se eliminó la mascota");
    setactivealert(false);
  };
  /// despacho de action para borrar mascota ↑

  useEffect(() => {
    if (order) dispatch(orderById(order));
    if (orderweight) dispatch(orderByWeight(Number(orderweight)));
    if (ordername) dispatch(orderByName(ordername));
  }, [order, orderweight, ordername]);

  const handleOrder = (e) => {
    setorder(e.target.value);
    dispatch(orderById(e.target.value));
  };
  const handleOrderWeight = (e) => {
    setorderweight(e.target.value);
    dispatch(orderByWeight(e.target.value));
  };

  return (
    <>
      <StyledHeaderAdmin>
        <h1>Mascotas</h1>
      </StyledHeaderAdmin>
      <StyledDashboardPetAdmin>
      
        <StyledDivFlexAdmin>{/* input de busqueda ↓ */}</StyledDivFlexAdmin>
        <h3>Busqueda por refugio</h3>
        <StyledInputSearch
          name="search"
          placeholder=" Buscar..."
          value={search}
          onChange={(e) => handleChangeSearch(e)}
        />
        <StyledDivFlexAdmin>
          {/* input de busqueda ↑ */}
          <div>
            <h2>Ubicación:</h2>
          </div>
          {/* Ubicación obligatoria ↓*/}
          <StyledSelectForDashboardPetAdmin
            name="Country"
            onChange={(e) => handleSubmitPrincipalLocation(e)}
          >
            <option disabled selected>
              País
            </option>
            {countries.length ? (
              countries.map((countrie) => (
                <option key={countrie.id} value={countrie.id}>
                  {countrie.country}
                </option>
              ))
            ) : (
              <p>Cargando...</p>
            )}
          </StyledSelectForDashboardPetAdmin>

          <StyledSelectForDashboardPetAdmin
            name="State"
            onChange={(e) => handleSubmitPrincipalLocation(e)}
          >
            <option disabled selected>
              Estado/ Provincia/ Departamento
            </option>
            <option> Todos </option>
            {onlystateswithshelter.length ? (
              onlystateswithshelter.map((state) => (
                <option key={state.id} value={state.id}>
                  {state.state}
                </option>
              ))
            ) : (
              <p>Cargando...</p>
            )}
          </StyledSelectForDashboardPetAdmin>

          {/* Ubicación obligatoria ↑*/}
        </StyledDivFlexAdmin>

        <hr></hr>

        <StyledDivFlexAdmin>
          {/* Ubicación local city ↓ */}
          <StyledSelectForDashboardPetAdmin
            name="City"
            onChange={(e) => handleSubmitPrincipalLocation(e)}
          >
            <option value={"not"}>Ciudad</option>
            {onlycitieswithshelter.length ? (
              onlycitieswithshelter.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.city}
                </option>
              ))
            ) : (
              <p>Cargando...</p>
            )}
          </StyledSelectForDashboardPetAdmin>
          {/* Ubicación local city ↑ */}

          {/* Filtro para refugio ↓ */}
          <StyledSelectForDashboardPetAdmin
            name="shelterId"
            onChange={(e) => handleForGetPets(e)}
          >
            <option disabled selected>
              Refugio
            </option>
            <option>Refugios</option>
            {petshelters ? (
              petshelters.map((shelter) => (
                <option key={shelter.id} value={shelter.id}>
                  {shelter.name}
                </option>
              ))
            ) : (
              <p>Cargando...</p>
            )}
          </StyledSelectForDashboardPetAdmin>
          {/* filtro para refugio ↑ */}

          {/* Filtrar por especie ↓ */}
          <StyledSelectForDashboardPetAdmin
            name="speciesId"
            onChange={(e) => handleForGetPets(e)}
          >
            <option disabled selected>
              Especie
            </option>
            <option>Especies</option>
            {petspecies ? (
              petspecies.map((specie) => (
                <option key={specie.id} value={specie.id}>
                  {specie.specie}
                </option>
              ))
            ) : (
              <p>Cargando...</p>
            )}
          </StyledSelectForDashboardPetAdmin>
          {/* Filtrar por especie ↑ */}

          {/* Filtro por el estado de la mascota ↓ */}
          <StyledSelectForDashboardPetAdmin
            name="petStatusId"
            onChange={(e) => handleForGetPets(e)}
          >
            <option disabled selected>
              Estatus mascota
            </option>
            <option>Estatus</option>
            {petstatus ? (
              petstatus.map((status) => (
                <option key={status.id} value={status.id}>
                  {status.status}
                </option>
              ))
            ) : (
              <p>Cargando...</p>
            )}
          </StyledSelectForDashboardPetAdmin>
          {/* Filtro por el estado de la mascota ↑ */}

          {/* Filtro para el género de la mascota ↓ */}
          <StyledSelectForDashboardPetAdmin
            name="genreId"
            onChange={(e) => handleForGetPets(e)}
          >
            <option disabled selected>
              Género
            </option>
            <option>Géneros</option>
            {petsgenres ? (
              petsgenres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.genre}
                </option>
              ))
            ) : (
              <p>Cargando...</p>
            )}
          </StyledSelectForDashboardPetAdmin>
          {/* Filtro para el género de la mascota ↑ */}

          {/* Filtro para la prop oculta de las mascotas ↓ */}
          <StyledSelectForDashboardPetAdmin
            name="hideFromDash"
            onChange={(e) => handleForGetPets(e)}
          >
            <option disabled selected>
              Hide
            </option>
            <option value={"all"}>Hides</option>
            {petshide ? (
              petshide.map((hide) => (
                <option key={hide.toString()} value={hide}>
                  {hide.toString()}
                </option>
              ))
            ) : (
              <p>Cargando...</p>
            )}
          </StyledSelectForDashboardPetAdmin>
          {/* filtro para la prop oculata de las mascotas ↑ */}
        </StyledDivFlexAdmin>
        <div>
          <div className="paginado">
            <select
              type="select"
              onChange={(e) => setRowsxPage(e.target.value)}
            >
              <option selected disabled>
                --Mostrar--
              </option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <PaginationAdmin
              rowsXpage={rowsXpage}
              helpLength={currentpets.length}
              paginado={paginado}
              currentPage={currentPage}
            />
          </div>

          {/* Modal de alerta antes de eliminar ↓ */}
          <ModalDashboard modal={activealert} setModal={setactivealert}>
            <StyledDivFlexAdmin>
              <StyledDivFlexColumnAdmin>
                <AlertPopUp>
                  <i class="fas fa-exclamation-triangle"></i>
                </AlertPopUp>
                <h1>¡Está seguro de eliminar la mascota!</h1>
                <StyledDivFlexAdmin>
                  <StyledButtonEditAdminPet onClick={handleAccept}>
                    <i class="fas fa-check"></i>
                  </StyledButtonEditAdminPet>
                </StyledDivFlexAdmin>
              </StyledDivFlexColumnAdmin>
            </StyledDivFlexAdmin>
          </ModalDashboard>
          {/* Modal de alerta antes de eliminar ↑ */}

          {/* Modal para editar el hide de la mascota ↓ */}
          <ModalDashboard modal={modal} setModal={setmodal}>
            <StyledDivFlexAdmin>
              <StyledDivFlexColumnAdmin>
                <br></br>
                <h1>Visibilidad de {individualpet.id && individualpet.name}</h1>
                {/* setear el hide de la mascota ↓ */}
                <br></br>
                <h2>Hide</h2>
                <StyledSelectForDashboardPetEditAdmin
                  name="hideFromDash"
                  value={individualpet.id && individualpet.hideFromDash}
                  onChange={(e) => handleSelect(e)}
                >
                  <option key="h1" value={true}>
                    True
                  </option>
                  <option key="h2" value={false}>
                    False
                  </option>
                </StyledSelectForDashboardPetEditAdmin>
                {/* setear el hide de la mascota ↑ */}
                <StyledDivFlexAdmin>
                  <br></br>
                  <StyledButtonDeleteAdminPet onClick={handleGetIndividualPet}>
                    <i class="fas fa-reply"></i>
                  </StyledButtonDeleteAdminPet>
                  <br></br>
                  <StyledButtonEditAdminPet onClick={handleSubmit}>
                    <i className="fas fa-edit"></i>
                  </StyledButtonEditAdminPet>
                </StyledDivFlexAdmin>
              </StyledDivFlexColumnAdmin>
            </StyledDivFlexAdmin>
          </ModalDashboard>
          {/* Modal para editar el hide de la mascota ↑ */}

          <table>
            <thead>
              <th>
                <StyledSelectForTable onChange={(e) => handleOrder(e)}>
                  <option disabled selected>
                    Id
                  </option>
                  <option value={"asc"}>↑ Id</option>
                  <option value={"des"}>↓ Id</option>
                </StyledSelectForTable>
              </th>
              <th>Nombre</th>
              <th>Especie</th>
              <th>Género</th>
              <th>
                <StyledSelectForTable onChange={(e) => handleOrderWeight(e)}>
                  <option disabled selected>
                    Peso
                  </option>
                  <option value={"asc"}>↑ Peso</option>
                  <option value={"des"}>↓ Peso</option>
                </StyledSelectForTable>
              </th>
              <th>Edad</th>
              <th>Esterilizado</th>
              <th>Estatus</th>
              <th>Hide</th>
              <th>Refugio</th>
              <th>Acciones</th>
            </thead>
            {typeof currentRows !== "string" && currentRows.length ? (
              currentRows.map((pet) => (
                <tbody key={pet.id}>
                  <td>{pet.id}</td>
                  <td>{pet.name}</td>
                  <td>{pet.species.specie}</td>
                  <td>{pet.genre.genre}</td>
                  <td>{pet.weight} kg</td>
                  <td>{pet.age.age}</td>
                  <td>{pet.sterilization.toString()}</td>
                  <td>{pet.petStatus.status}</td>
                  <td>{pet.hideFromDash.toString()}</td>
                  <td>{pet.shelter.name}</td>
                  <td>
                    <div>
                      <StyledButtonDeleteAdminPet
                        onClick={() => handleDeletePet(pet.id)}
                      >
                        <i className="fas fa-trash"></i>
                      </StyledButtonDeleteAdminPet>
                      <StyledButtonEditAdminPet
                        onClick={() => handleGetIndividualPet(pet)}
                      >
                        <i className="fas fa-edit"></i>
                      </StyledButtonEditAdminPet>
                    </div>
                  </td>
                </tbody>
              ))
            ) : (
              <p>Cargando...</p>
            )}
          </table>
        </div>
      </StyledDashboardPetAdmin>
    </>
  );
};
