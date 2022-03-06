import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {getcities, getCountries, getIndividualPetForAdmin , getGenresForAdmin, getHideForAdmin, getOnlyCitiesWithShelter, getOnlyStatesWithShelter, getPetsFilterForAdmin, getShelterOfPetForAdmin, getShelters, getSpecies, getSpeciesForAdmin, getStates, getStatusForAdmin, getTemperaments, setCurrentCity} from '../Redux/Actions/index'
import { StyledDashboardPetAdmin, StyledDivFlexAdmin, 
    StyledSelectForTable, StyledSelectForDashboardPetAdmin, 
    StyledButtonDeleteAdminPet, StyledButtonEditAdminPet,
    StyledInputSearch,
    StyledInputCheck, StyledButtonSearch } from "../Styles/StyledDashboardPetAdmin"
import {StyleButtonBack} from "../Styles/StyledButtons"
import { APIGATEWAY_URL } from '../utils/constant';
import search from "../Icos/search-solid.svg"


export const DashboardPetAdmin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    /// estados principales
    const countries = useSelector((state) => state.countries)
    const states = useSelector((state) => state.states)
    const cities = useSelector((state) => state.cities)
    ///  estados principales


    /// estados para filtrar ↓
    const currentCity = useSelector((state) => state.currentcity)
    const onlycitieswithshelter = useSelector((state) => state.onlyCitiesWithShelter)
    const onlystateswithshelter = useSelector((state) => state.onlyStatesWithShelter)
    const pets = useSelector((state) => state.petsfilterforadmin)
    const petstatus = useSelector((state) => state.statusForAdmin)
    const petspecies = useSelector((state) => state.speciesForAdmin)
    const petsgenres = useSelector((state) => state.genresForAdmin)
    const petshide = useSelector((state) => state.hideForAdmin)
    const petshelters = useSelector((state) => state.shelterOfPetForAdmin)
    /// estados para filtrar ↑
    
    /// estados locales para modificar petición ↓
    const [currentcity, setCurrentcity] = useState()
    const [link, setLink] = useState(`${APIGATEWAY_URL}/pets/${currentCity?currentCity:''}`)
    const [input, setInput] = useState({})
    /// estados locales para modificar petición ↑
    
    /// obtener estados princiales ↓
    useEffect(() => {
        dispatch(getCountries())
      }, [])

    useEffect(async() => {
        dispatch(getCountries())
        dispatch(getShelters())
        if(cities.length){dispatch(getOnlyCitiesWithShelter())}
        if(link){ await dispatch(getPetsFilterForAdmin(link))}
        if(pets){
            await dispatch(getStatusForAdmin())
            await dispatch(getSpeciesForAdmin())
            await dispatch(getGenresForAdmin())
            await dispatch(getHideForAdmin())
            await dispatch(getShelterOfPetForAdmin())  
        }
    }, [dispatch,cities,link])

    useEffect(()=> {
    dispatch(getOnlyStatesWithShelter())
    if(pets)dispatch(getStatusForAdmin())
    },[states])
    /// obtener estados principales ↑


    /// setear el estado input, para hacer la petición con las querys y obtener las mascotas ↓
    useEffect(()=>{
        setLink(link)
    },[onlycitieswithshelter])

    useEffect(()=>{
        let query = `${link}?`
        Object.entries(input).forEach(([key,value])=> {
             query = `${query}${[key]}=${[value]}&`
        
        })  
        dispatch(getPetsFilterForAdmin(query))
    },[input])

    const handleForGetPets = (e) => {
        let data = e.target.value === 'true' ? true : e.target.value === 'false' ? false : e.target.value
        
        if(isNaN(Number(e.target.value)) && typeof(data) !== 'boolean'){
            let temp = input
            delete temp[e.target.name]
            setInput((input) => {return{...input}})
            console.log(temp)
        }else{
                setInput( (input) => { return {
                    ...input,
                    [e.target.name]: e.target.value
                }})
        }
    }
    /// setear el estado input, para hacer la petición con las querys y obtener las mascotas ↑


    /// manejar cambios en la ubicación ↓
    const handleSubmitPrincipalLocation = (e) => {
        if(e.target.name === 'Country'){
            dispatch(getStates(e.target.value))
        }
        if(e.target.name === 'State'){
            dispatch(getcities(e.target.value))
        }
        if(e.target.name === 'City'){
            setCurrentcity(Number(e.target.value))
            dispatch(setCurrentCity(Number(e.target.value)))
            dispatch(setLink(`${APIGATEWAY_URL}/pets/${Number(e.target.value)}`))
        }
    }
    /// manejar cambios en la ubicación ↑


    /// despacho de action para setear los datos a modificar ↓
    const handleGetIndividualPet = (cityId,petId) => {
        dispatch(getIndividualPetForAdmin(Number(cityId),Number(petId)))
    }
    /// despacho de action para setear los datos a modificar ↑

    const Back = () => {
        navigate('/dashboard')
    }

    return (
        <StyledDashboardPetAdmin>
            <StyleButtonBack onClick={Back}>{'<'}</StyleButtonBack>
            <h1>DashboardPetAdmin</h1>
            <StyledDivFlexAdmin>

                <form>
                    <StyledDivFlexAdmin>
                        <div>
                            <h3>BUSQUEDA</h3>
                            <StyledInputSearch type="text" placeholder="Ingrese dato a buscar"/>
                        </div>
                        <div>
                            <StyledButtonSearch>Buscar <img src={search}/></StyledButtonSearch>
                        </div>
                        <div>
                            <br></br>
                            <label>Ciudad</label>
                            <StyledInputCheck type="checkbox"/>

                            <label>Refugio</label>
                            <StyledInputCheck type="checkbox"/>

                            <label>Especie</label>
                            <StyledInputCheck type="checkbox"/>

                            <label>Nombre</label>
                            <StyledInputCheck type="checkbox"/>
                        </div>
                    </StyledDivFlexAdmin>    
                </form>

            </StyledDivFlexAdmin>
            
            <StyledDivFlexAdmin>
                <div>
                    <h2>Ubicación:</h2>
                </div>
                    {/* Ubicación obligatoria ↓*/}

                    <StyledSelectForDashboardPetAdmin name="Country" onChange={e => handleSubmitPrincipalLocation(e)}>
                            <option disabled selected>
                                    País
                            </option>
                            {countries.length? countries.map(countrie => (
                                <option key={countrie.id} value={countrie.id}>{countrie.country}</option>
                            )): <p>Cargando...</p>}
                    </StyledSelectForDashboardPetAdmin>

                    <StyledSelectForDashboardPetAdmin name="State" onChange={e => handleSubmitPrincipalLocation(e)}>
                            <option disabled selected>
                                    Estado/ Provincia/ Departamento
                            </option>
                            <option> Todos </option>
                            {onlystateswithshelter.length? onlystateswithshelter.map(state => (
                                <option key={state.id} value={state.id} >{state.state}</option>
                            )):<p>Cargando...</p>}
                    </StyledSelectForDashboardPetAdmin>

                    {/* Ubicación obligatoria ↑*/}
            </StyledDivFlexAdmin>

            <hr></hr>

            <StyledDivFlexAdmin>
                
                {/* Ubicación local city ↓ */}
                <StyledSelectForDashboardPetAdmin name="City" onChange={e => handleSubmitPrincipalLocation(e)}>
                    <option disabled selected>
                            Ciudad
                    </option>
                    <option value={''}>Todos</option>
                    {onlycitieswithshelter.length ? onlycitieswithshelter.map(city => (
                        <option key={city.id} value={city.id}>{city.city}</option>
                    )):<p>Cargando...</p>}   
                </StyledSelectForDashboardPetAdmin>
                {/* Ubicación local city ↑ */}
                
                {/* Filtro para refugio ↓ */}
                <StyledSelectForDashboardPetAdmin name="shelterId" onChange={e =>handleForGetPets(e)}>
                    <option disabled selected>
                            Refugio
                    </option>
                    <option>Refugios</option>
                    {petshelters? petshelters.map(shelter => (
                        <option key={shelter.id} value={shelter.id}>{shelter.name}</option>
                    )):<p>Cargando...</p>}
                </StyledSelectForDashboardPetAdmin>
                {/* filtro para refugio ↑ */}
                
                {/* Filtrar por especie ↓ */}
                <StyledSelectForDashboardPetAdmin name="speciesId" onChange={e => handleForGetPets(e)}>
                    <option disabled selected>
                            Especie
                    </option>
                    <option>Especies</option>
                    {petspecies? petspecies.map(specie => (
                        <option key={specie.id} value={specie.id}>{specie.specie}</option>
                    )):<p>Cargando...</p>}
                </StyledSelectForDashboardPetAdmin>
                {/* Filtrar por especie ↑ */}

                {/* Filtro por el estado de la mascota ↓ */}
                <StyledSelectForDashboardPetAdmin name="petStatusId" onChange={e => handleForGetPets(e)}>
                    <option disabled selected>
                            Estatus mascota
                    </option>
                    <option>Estatus</option>
                    {petstatus? petstatus.map(status => (
                        <option key={status.id} value={status.id} >{status.status}</option>
                    )):<p>Cargando...</p>}
                </StyledSelectForDashboardPetAdmin>
                {/* Filtro por el estado de la mascota ↑ */}

                {/* Filtro para el género de la mascota ↓ */}
                <StyledSelectForDashboardPetAdmin name="genreId" onChange={e => handleForGetPets(e)}>
                    <option disabled selected>
                            Género
                    </option>
                    <option>Géneros</option>
                    {petsgenres? petsgenres.map(genre => (
                        <option key={genre.id} value={genre.id}>{genre.genre}</option>
                    )):<p>Cargando...</p>}
                </StyledSelectForDashboardPetAdmin>
                {/* Filtro para el género de la mascota ↑ */}

                {/* Filtro para la prop oculta de las mascotas ↓ */}
                <StyledSelectForDashboardPetAdmin name="hideFromDash" onChange={e => handleForGetPets(e)}>
                    <option disabled selected>
                            Hide
                    </option>
                    <option value={'all'}>Hides</option>
                    {petshide? petshide.map(hide => (
                        <option key={hide.toString()} value={hide}>{hide.toString()}</option>
                    )):<p>Cargando...</p>}
                </StyledSelectForDashboardPetAdmin>
                {/* filtro para la prop oculata de las mascotas ↑ */}
            </StyledDivFlexAdmin>
            <div>
                <table>
                    <thead>
                        <th>
                        <StyledSelectForTable>
                            <option disabled selected>
                            Id
                            </option>
                            <option>↑ Asc</option>
                            <option>↓ Des</option>
                        </StyledSelectForTable>
                        </th>
                        <th>
                        <StyledSelectForTable>
                            <option disabled selected>
                            Nombre
                            </option>
                            <option>↑ Asc</option>
                            <option>↓ Des</option>
                        </StyledSelectForTable></th>
                        <th>
                            Especie    
                        </th>
                        <th>
                            Género 
                        </th>
                        <th>
                        <StyledSelectForTable>
                            <option disabled selected>
                            Peso
                            </option>
                            <option>↑ Asc</option>
                            <option>↓ Des</option>
                        </StyledSelectForTable>    
                        </th>
                        <th>
                        <StyledSelectForTable>
                            <option disabled selected>
                            Edad
                            </option>
                            <option>↑ Asc</option>
                            <option>↓ Des</option>
                        </StyledSelectForTable></th>
                        <th>
                            Esterilizado
                        </th>
                        <th>
                            Estatus
                        </th>
                        <th>
                            Hide
                        </th>
                        <th>
                            Refugio
                        </th>
                        <th>Acciones</th>
                    </thead>
                        {typeof(pets) !== 'string' && pets.length? pets.map(pet => (
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
                                    <StyledButtonDeleteAdminPet><i class="fas fa-trash"></i></StyledButtonDeleteAdminPet>
                                    <StyledButtonEditAdminPet onClick={() => handleGetIndividualPet(currentcity,pet.id)}><Link to={`Edit/${[[currentcity],[pet.id]]}`}><i className="fas fa-edit"></i></Link></StyledButtonEditAdminPet>
                                    
                                </div>
                                </td>
                           </tbody> 
                        )):<p>Cargando...</p>}
                </table>
            </div>
        </StyledDashboardPetAdmin>
    )
}