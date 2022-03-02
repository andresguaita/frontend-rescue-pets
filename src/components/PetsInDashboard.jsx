import React, { useEffect, useState, Fragment} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPetsForDashboard, getAllSpecies, gettTemperaments, getAllPetStatus, getAllAges, getGenres, deletePet, editPet,ModalDashboardOpen } from '../Redux/Actions'
import styled from 'styled-components';
import ReadOnlyRows from './ReadOnlyRows';
import EditableRows from './EditableRows';
import { Link } from 'react-router-dom';
import { APIGATEWAY_URL } from '../utils/constant';
import CreatePets from './CreatePets'


import {
  Container, Center, CenterChild ,Table,Button,Button2
} from "../Styles/StyledPetsInDashboard"



const PetsInDashboard = () => {
  let modaldashboard = useSelector((state) => state.modaldashboard);
    const dispatch = useDispatch()

    
    useEffect(() => {
      dispatch(getAllSpecies())
      dispatch(gettTemperaments())
      dispatch(getAllPetStatus())
      dispatch(getAllAges())
      dispatch(getGenres())
    }, [])
    
    const allSpecies = useSelector(state => state.allspecies)
    const allTemperaments = useSelector(state => state.ttemperaments)
    const allPetStatus = useSelector(state => state.petStatus)
    const allAges = useSelector(state => state.allAges)
    const allGenres = useSelector(state => state.allGenres)


    const routeInfo = useSelector(state => state.ShelterAndCityId)
    const route = `${APIGATEWAY_URL}/pets/${routeInfo.cityId}?shelterId=${routeInfo.shelterId}`
    
    const petsFromShelter = useSelector( state => state.petsForDashboard )
    // console.log("petsFromShelter -------------->", petsFromShelter)
    
    const [data, setData] = useState('')

    useEffect(()=>{
        dispatch(getPetsForDashboard(route))
      },[dispatch ])



      
      useEffect(() => {
          setData(petsFromShelter)
      }, [petsFromShelter])
      


    const [editFormData, seteditFormData] = useState({
      name: '',
      sterilization: '',
      weight: '',
      description: '',
      image: '',
      speciesId: '',
      temperament: '',
      age: '',
      petStatus: '',
      genreId: ''
    })

    const handleEditFormChange = (event) => {
      event.preventDefault();
      // const fieldName = event.target.getAttribute('name')
      // const fieldValue = event.target.value

      // const newFormData = {... editFormData}
      // newFormData[fieldName] = fieldValue;
      // console.log("flag event",event)
      // console.log(event.target)
      // console.log(event.target.name)
      // console.log(event.target.value)
      seteditFormData({
        ...editFormData,
        [event.target.name]: event.target.value
      })}



    const [editPetId, seteditPetId] = useState('')

    const handleEditClick = (event, data) => {
      event.preventDefault();
      seteditPetId(data.id)
      const formValues = {
        name: data.name,
        sterilization: data.sterilization,
        weight: data.weight,
        description: data.description,
        image: <img src={data.image}></img>,
        speciesId: data.speciesId,
        temperament: data.temperament,
        age: data.age,
        petStatus: data.petStatus,
        genreId: data.genreId
      }
      seteditFormData(formValues)
      
    }

    const handleEditedFormSubmit = (event) => {
      event.preventDefault();
      dispatch(editPet(editPetId, editFormData))
      dispatch(getPetsForDashboard(route))
      seteditPetId(null);
      // const editedPetInfo = {
      //   id: editPetId,
      //   name: editFormData.name,
      //   sterilization: editFormData.sterilization,
      //   weight: editFormData.weight,
      //   description: editFormData.description,
      //   image: editFormData.image,
      //   speciesId: editFormData.speciesId,
      //   temperament: editFormData.temperament,
      //   age: editFormData.age,
      //   petStatus: editFormData.petStatus,
      //   genreId: editFormData.genreId
      // }
      // const newData = [...data];
      // const index = data.findIndex((pet) => pet.id === editPetId)
      // newData[index] = editedPetInfo
      // setData(newData);
      // seteditPetId(null);
    }

    const handleCancelClick = (event) => {
      event.preventDefault();
      seteditPetId(null);
    }

    const handleDeleteClick = (event, petId) => {
      event.preventDefault();
      dispatch(deletePet(petId))
      dispatch(getPetsForDashboard(route))
      // const newData = [...data];
      // const index = data.findIndex((pet) => pet.id === petId)
      // newData.splice(index, 1)
      // setData(newData)
    }

    function handleClickModalCreate(evento, data) {
      dispatch(ModalDashboardOpen(data));
  }


  return (
    <Center>
         {modaldashboard === "CreatePets" ? <CreatePets></CreatePets> : ""}
        <CenterChild>

      <form onSubmit={handleEditedFormSubmit}>
          <Table>
              <thead>
              <tr>
                  <th>Nombre</th>
                  <th>Esterelization</th>
                  <th>Peso</th>
                  <th>Descripción</th>
                  <th>Imágenes</th>
                  <th>Especie</th>
                  <th>Temperamento</th>
                  <th>Edad</th>
                  <th>Estado</th>
                  <th>Género</th>
                  <th>Acciones</th>
              </tr>
              </thead>
              <tbody>
              {
                typeof(data) !== "string" && data.length? data.map(data => 
                  <Fragment>
                    {editPetId === data.id ? (
                      <EditableRows
                        allSpecies={allSpecies}
                        allTemperaments={allTemperaments}
                        allPetStatus={allPetStatus}
                        allAges={allAges}
                        allGenres={allGenres}
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                        />
                        ) : (
                          <ReadOnlyRows
                          data={data}
                          handleEditClick={handleEditClick}
                          handleDeleteClick={handleDeleteClick}
                          />
                          )}
                    </Fragment>
                  ) : <tr ><td>Loading</td></tr>
                }
              </tbody>
          </Table>
      </form>
      

       
      <Button onClick={
                    (event) => handleClickModalCreate(event, "CreatePets")
                }
                className="but">
            
                <br/>
                Nueva Mascota
            </Button>
          
            <Link to='/dashboard/pets/FollowUp'>
      <Button>Seguimiento a Mascotas adoptadas</Button>
      </Link> 

      <Link to='/dashboard'>
      <Button>Regresar</Button>
      </Link> 

      {/* <Link to='/dashboard/CreatePets'>
      <Button>Crear nueva Mascota</Button>
      </Link>   */}
          </CenterChild>
    </Center>
    

    
  )
}

export default PetsInDashboard


