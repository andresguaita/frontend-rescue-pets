import React from 'react'
import {Center, CenterChild, Table} from '../Styles/StyledFollowUpTransit'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect, useState, Fragment } from 'react'
import { getFollowUpTransits, getPetsForDashboard, editFollowUpTransit, editPetInTransitStatus, editPetsAssigned } from '../Redux/Actions'
import { APIGATEWAY_URL } from '../utils/constant';
import EditableRowsTransit from './EditableRowsTransit'
import ReadOnlyRowsTransit from './ReadOnlyRowsTransit'

const FollowUpTransit = () => {

    const ShelterAndCityINfo = useSelector(state => state.ShelterAndCityId)
    // console.log("ShelterAndCityINfo------------>",ShelterAndCityINfo)
    
    
    const shelterId = ShelterAndCityINfo.shelterId
    // console.log("shelterId------------>",shelterId)
    const cityId = ShelterAndCityINfo.cityId
    // console.log("cityId------------>",cityId)
    const route = `${APIGATEWAY_URL}/pets/${cityId}?shelterId=${shelterId}`
  
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFollowUpTransits(shelterId))
      }, [dispatch])

      useEffect(()=>{
        dispatch(getPetsForDashboard(route))
      },[dispatch ])


    const allFollowUpTransits = useSelector(state => state.followUpTransits)
    // console.log("allFollowUpTransits---------------------->", allFollowUpTransits)
    const petsFromShelter = useSelector( state => state.petsForDashboard )


    const [petData, setPetData] = useState('')

    const [data, setData] = useState('')
    const [editedFormData, seteditedFormData] = useState([])

    useEffect(() => {
        if(typeof(petsFromShelter) !== "string"){
            const filteredPets = petsFromShelter.filter(el => el.petStatusId !== 2 && el.inTransit !== true)
            const petsIdAndName = filteredPets.map(el => {
                return {
                    id: el.id,
                    name: el.name
                }
            })
            // console.log("petsIdAndName------------------>", petsIdAndName)
            setPetData(petsIdAndName)
            setData(allFollowUpTransits)
            // seteditedFormData([])
        }
    }, [petsFromShelter, allFollowUpTransits])


    
    // console.log("data-------------------->", data)


    const handleEditedFormChange = (event) => {
    event.preventDefault();
    // console.log("event.target.name-------------------->", event.target.name)
    // console.log("event.target.value-------------------->", event.target.value)
    let temp = event.target.value.split(",")

    seteditedFormData(
        [...editedFormData, {id: parseInt(temp[0]), name: temp[1]}]
        // petsAssigned: [...editedFormData.petsAssigned, "pet" ]
        // "Hola Mundo"

    )}

    const [editableTransitId, setEditableTransitId] = useState('')



    const handleEditClick = async (event, data) => {
        
        event.preventDefault();
        seteditedFormData([])
        setEditableTransitId(data.id)
        await dispatch(getPetsForDashboard(route))
        // const formValues = {
        //     petsAssigned: data.petsAssigned,
        // }
        
        
    }

    const handleEditedFormSubmit =  async (event) => {
        event.preventDefault();
        // console.log("primer editableTransitId",editableTransitId)
        // console.log("editedFormData",editedFormData)
        const payload = {
            data: editedFormData
        }
        await dispatch(editFollowUpTransit(editableTransitId, payload))
        const status = true
        await dispatch(editPetInTransitStatus(status, payload))
        await dispatch(getFollowUpTransits(shelterId))
        
        setEditableTransitId(null);
    }

    const handleCancelClick = (event) => {
        event.preventDefault();
        setEditableTransitId(null);
        // seteditedFormData([]);
    }

    const handleHideClick = async (event, transitId) => {
        event.preventDefault();
        const payload = {
            hideFollowUp: true
        }
        // await dispatch(hideFollowUpfromDash(transitId, payload))
        // await dispatch(getFollowUpsFromShelter(shelterId))
    }

    const handleRemovefromTransit =  async (event, petId, el, transitId) => {
        console.log("data recieved-------------->", el)
        const arreglo = {
            data: [el]
        }
        // console.log("arreglo-------------->", arreglo)
        // console.log("transitId-------------->", transitId)
        // console.log("data recieved-------------->", petId)
        event.preventDefault();
        const status = false
        const payload = {
            data: petId
        }
        await dispatch(editPetInTransitStatus(status, payload))
        await dispatch(editPetsAssigned(transitId, arreglo))
        await dispatch(getFollowUpTransits(shelterId))
        await dispatch(getPetsForDashboard(route))

    }


    return (
        <Center>
            <CenterChild>
                <form onSubmit={handleEditedFormSubmit}>
                    <Table>
                        <thead>
                        <tr>
                            <th>Nombre del Voluntario</th>
                            <th>E-mail del Voluntario</th>
                            <th>Dirección</th>
                            <th>Teléfono</th>
                            <th>Mascotas asignadas</th>
                            <th>Acciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                        typeof(data) !== "string" && data.length? data.map(data => 
                            <Fragment>
                            {editableTransitId === data.id ? (
                                <EditableRowsTransit
                                data={data}
                                petData={petData}
                                editedFormData={editedFormData}
                                seteditedFormData={seteditedFormData}
                                handleEditedFormChange={handleEditedFormChange}
                                handleCancelClick={handleCancelClick}
                                />
                                ) : (
                                    <ReadOnlyRowsTransit
                                    data={data}
                                    handleEditClick={handleEditClick}
                                    handleHideClick={handleHideClick}
                                    handleRemovefromTransit={handleRemovefromTransit}
                                    />
                                    )}
                            </Fragment>
                            ) : <tr ><td>Loading</td></tr>
                        }
                        </tbody>
                    </Table>
                </form>
            </CenterChild>
        </Center>
    )
}

export default FollowUpTransit