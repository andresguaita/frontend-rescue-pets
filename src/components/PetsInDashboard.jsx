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
  Container, Center, CenterChild ,Table,Button,Button3
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
      // name: '',
      // sterilization: '',
      // weight: '',
      // description: '',
      // image: '',
      // speciesId: '',
      // temperament: '',
      // temperament2: '',
      // age: '',
      // petStatus: '',
      // genreId: ''
      
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
        sterilization2: data.sterilization,
        weight: data.weight,
        description: data.description,
        image: data.image,
        speciesId: data.speciesId,
        species2: data.species,
        temperament: data.temperament.id,
        temperament2: data.temperament,
        age: data.age.id,
        age2: data.age,
        petStatus: data.petStatus.id,
        petStatus2: data.petStatus,
        genreId: data.genre.id,
        genre2: data.genre
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
        <Button3 onClick={
                    (event) => handleClickModalCreate(event, "CreatePets")
                }
                className="but">
            
                <br/>
                Nueva Mascota
            </Button3>
          
            <Link to='/dashboard/pets/FollowUp'>
      <Button3>Seguimiento a Mascotas adoptadas</Button3>
      </Link> 

      <Link to='/dashboard'>
      <Button3>Regresar</Button3>
      </Link> <br></br><br></br>
      <form onSubmit={handleEditedFormSubmit}>
          <Table  >
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
      

       
     

      {/* <Link to='/dashboard/CreatePets'>
      <Button>Crear nueva Mascota</Button>
      </Link>   */}
          </CenterChild>
    </Center>
    

    
  )
}

export default PetsInDashboard


