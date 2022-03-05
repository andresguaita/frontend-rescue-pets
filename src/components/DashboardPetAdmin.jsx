import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {getcities, getCountries, getFilterShelters, getGenres, getOnlyCitiesWithShelter, getOnlyStatesWithShelter, getPetsFilterForAdmin, getShelters, getSpecies, getStates, getStatusForAdmin, getTemperaments} from '../Redux/Actions/index'
import { StyledDashboardPetAdmin, StyledDivFlexAdmin, 
    StyledSelectForTable, StyledSelectForDashboardPetAdmin, 
    StyledButtonDeleteAdminPet, StyledButtonEditAdminPet,
    StyledInputSearch, StyledInputButton,
    StyledInputCheck } from "../Styles/StyledDashboardPetAdmin"
import {StyleButtonBack} from "../Styles/StyledButtons"
import { APIGATEWAY_URL } from '../utils/constant';


export const DashboardPetAdmin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    /// estados principales
    const countries = useSelector((state) => state.countries)
    const states = useSelector((state) => state.states)
    const cities = useSelector((state) => state.cities)
    ///  estados principales


    /// estados para filtrar ↓
    const onlycitieswithshelter = useSelector((state) => state.onlyCitiesWithShelter)
    const onlystateswithshelter = useSelector((state) => state.onlyStatesWithShelter)
    const pets = useSelector((state) => state.petsfilterforadmin)
    const petstatus = useSelector((state) => state.statusForAdmin)
    /// estados para filtrar ↑
    
    const [link, setLink] = useState()
    const [input, setInput] = useState({})
    
    /// obtener estados princiales ↓
    useEffect(() => {
        dispatch(getCountries())
      }, [])
      useEffect(async() => {
          dispatch(getCountries())
          dispatch(getShelters())
          if(cities.length){dispatch(getOnlyCitiesWithShelter())}
          if(link){ await dispatch(getPetsFilterForAdmin(link))}
          if(pets)await dispatch(getStatusForAdmin())
      }, [dispatch,cities,link])

      useEffect(()=> {
        dispatch(getOnlyStatesWithShelter())
        if(pets)dispatch(getStatusForAdmin())
      },[states])
      /// obtener estados principales ↑

    /// setear el estado input, para hacer la petición com las querys y obtener las mascotas ↓
    // useEffect(()=>{
    //     setLink(`${APIGATEWAY_URL}/pets/${}`)
    // },[onlycitieswithshelter])

    // useEffect(()=>{
    //     let query = `${link}?`
    //     Object.entries(input).forEach(([key,value])=> {
    //          query = `${query}${[key]}=${[value]}&`
        
    //     })  
    //     dispatch(getPetsFilter(query))
    // },[input])

    const handleForGetPets = (e) => {
        if(isNaN(Number(e.target.value))){
            let temp = input
            delete temp[e.target.name]
            setInput((input) => {return{...input}})
        }else{
                setInput( (input) => { return {
                    ...input,
                    [e.target.name]: e.target.value
                }})
        }
    }
    /// setear el estado input, para hacer la petición com las querys y obtener las mascotas ↑

    const handleSubmitPrincipalLocation = (e) => {
        if(e.target.name === 'Country'){
            dispatch(getStates(e.target.value))
        }
        if(e.target.name === 'State'){
            dispatch(getcities(e.target.value))
        }
        if(e.target.name === 'City'){
            dispatch(setLink(`${APIGATEWAY_URL}/pets/${Number(e.target.value)}`))
        }
    }


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
                            
                            <StyledInputButton type="button" value="buscar"/>
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
                    <h2>Ubicación obligatoria</h2>
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
                
                {/*  */}
                <StyledSelectForDashboardPetAdmin>
                    <option disabled selected>
                            Refugio
                    </option>
                    <option>Todas</option>
                    <option>refugio 1</option>
                    <option>refugio 2</option>
                </StyledSelectForDashboardPetAdmin>
                {/*  */}
                
                {/*  */}
                <StyledSelectForDashboardPetAdmin>
                    <option disabled selected>
                            Especie
                    </option>
                    <option>Todas</option>
                    <option>Perro</option>
                    <option>Gato</option>
                    <option>Pajaro</option>
                    <option>Cerdo</option>
                </StyledSelectForDashboardPetAdmin>
                {/*  */}

                {/* Filtro por el estado de la mascota ↓ */}
                <StyledSelectForDashboardPetAdmin>
                    <option disabled selected>
                            Estatus mascota
                    </option>
                    <option>Todos</option>
                    {petstatus? petstatus.map(status => (
                        <option key={status.id} value={status.id} >{status.status}</option>
                    )):<p>Cargando...</p>}
                </StyledSelectForDashboardPetAdmin>
                {/* Filtro por el estado de la mascota ↑ */}

                {/*  */}
                <StyledSelectForDashboardPetAdmin>
                    <option disabled selected>
                            Género
                    </option>
                    <option>Macho</option>
                    <option>Hembra</option>
                </StyledSelectForDashboardPetAdmin>
                {/*  */}

                {/*  */}
                <StyledSelectForDashboardPetAdmin>
                    <option disabled selected>
                            Hide
                    </option>
                    <option>True</option>
                    <option>False</option>
                </StyledSelectForDashboardPetAdmin>
                {/*  */}
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
                                <td>{pet.weight}</td>
                                <td>{pet.age.age}</td>
                                <td>{pet.sterilization.toString()}</td>
                                <td>{pet.petStatus.status}</td>
                                <td>{pet.hideFromDash.toString()}</td>
                                <td>{pet.shelter.name}</td>
                                <td>
                                <div>
                                    <StyledButtonDeleteAdminPet>x</StyledButtonDeleteAdminPet>
                                    <StyledButtonEditAdminPet>Edit</StyledButtonEditAdminPet>
                                </div>
                                </td>
                           </tbody> 
                        )):<p>Cargando...</p>}
                </table>
            </div>
        </StyledDashboardPetAdmin>
    )
}