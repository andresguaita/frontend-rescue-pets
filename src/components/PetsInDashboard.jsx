import React, { useEffect, useState, Fragment} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  uploadImageCloud, getPetsForDashboard, getAllSpecies, gettTemperaments, getAllPetStatus, getAllAges, getGenres, deletePet, editPet,ModalDashboardOpen, hidePetInDashbaord } from '../Redux/Actions'
import styled from 'styled-components';
import ReadOnlyRows from './ReadOnlyRows';
import EditableRows from './EditableRows';
import { Link } from 'react-router-dom';
import { APIGATEWAY_URL } from '../utils/constant';
import CreatePets from './CreatePets'
import {ModalDashboardPet} from './ModalDashboardPet'

import {
  Container, Center, CenterChild ,Table,Button,Button3, DivForImageModal,DivContentForDivImage
} from "../Styles/StyledPetsInDashboard"
import Swal from 'sweetalert2';



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
    
    // console.log("filteredPets---------------->", filteredPets)

    const [data, setData] = useState('')

    useEffect(()=>{
        dispatch(getPetsForDashboard(route))
      },[dispatch])




      useEffect(() => {
        if(typeof(petsFromShelter) !== "string"){
          const filteredPets = petsFromShelter.filter(el => el.hideFromDash === false)
            setData(filteredPets)
        }
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

    const handleEditedFormSubmit = async (event) => {
      event.preventDefault();
      await dispatch(editPet(editPetId, editFormData))
      await dispatch(getPetsForDashboard(route))
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

    const handleDeleteClick = async (event, petId) => {
      event.preventDefault();
      // dispatch(deletePet(petId))
      const hidden = {
          hideFromDash: true
      }
      await dispatch(hidePetInDashbaord(petId, hidden))
      await dispatch(getPetsForDashboard(route))
      // const newData = [...data];
      // const index = data.findIndex((pet) => pet.id === petId)
      // newData.splice(index, 1)
      // setData(newData)
    }

    function handleClickModalCreate(evento, data) {
      dispatch(ModalDashboardOpen(data));
    
  }

  /// estados para el modal ↓
  const[modal, setmodal] = useState(false)
  const[change,setchange] = useState()
  const[image,setimage] = useState()
  /// estado para el modal ↑


  /// function para eliminar la imágen en el index específico ↓ ---------------- ↓
  function handleDeleteImage(img){
      setchange('deleteImage -->'+img)
      let temp = editFormData.image.filter(i => i !== img)
      seteditFormData({
        ...editFormData,
        image: temp
      })
  }
  /// function para eliminar la imágen en el index específico ↑ ---------------- ↑


  /// function para agregar imágenes a la mascota ↓ --------- ↓
  const handleAddImage = async  (e) => {
    if(editFormData.image.length < 5){
      const formData = new FormData()
      formData.append("file", e.target.files[0])
      formData.append("upload_preset", "rescuePetsUpload")
      let link = await dispatch(uploadImageCloud(formData))
      setimage(link)
    }else{
      setchange('alert')
      Swal.fire('Ups!','No se puede cargar más de 5 imágenes', 'info');

    }  
  }
  /// function para agregar imágenes a la mascota ↑ --------- ↑

  /// useEffect parar recargar con cada adición ↓ -------- ↓
  useEffect(()=>{
    if(image){
      if(editFormData.image.length < 5){
        editFormData.image.push(image)
      }
    }
    setchange('addImage ---> '+image)
  },[image])
  /// useEffect para recargar con cada adición ↑ ------ ↑

  /// useEffect para recargar con cada eliminación de imágen ↓
  useEffect(() => {
    dispatch(getPetsForDashboard(route))
  },[change])
  /// useEffect para recargar con cada eliminación de imágen ↑


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

      {/* modal para cambiar las imagenes de la mascota ↓ -------------------- ↓ */}
       <ModalDashboardPet modal={modal} setModal={setmodal}>
            <h1>Imágenes actuales</h1>
                  <input
                      className="custom-file-upload"
                      type="file"
                      multiple="multiple"
                      name="file"
                      placeholder="Inserte Imagen"
                      onChange={(e)=>{handleAddImage(e)}}
                    />
                <DivContentForDivImage>
                  {editFormData.image ? editFormData.image.map((i,index)=> (
                    i?<DivForImageModal>
                        <button onClick={() => handleDeleteImage(i)}><i class="fas fa-trash"></i></button>
                        <img src={i}/>
                    </DivForImageModal>:null
                  )):<h3>No hay imágenes cargadas</h3>}
                </DivContentForDivImage>    
        </ModalDashboardPet>
      {/* modal para cambiar las imagenes de la mascota ↑ --------------------- ↑*/}

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
                        setmodal={setmodal}
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


