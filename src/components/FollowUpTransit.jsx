import React from 'react'
import {Center, CenterChild, Table} from '../Styles/StyledFollowUpTransit'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect, useState, Fragment } from 'react'
import { getFollowUpTransits, getPetsForDashboard } from '../Redux/Actions'
import { APIGATEWAY_URL } from '../utils/constant';
import EditableRowsTransit from './EditableRowsTransit'
import ReadOnlyRowsTransit from './ReadOnlyRowsTransit'

const FollowUpTransit = () => {

    const ShelterAndCityINfo = useSelector(state => state.ShelterAndCityId)
    console.log("ShelterAndCityINfo------------>",ShelterAndCityINfo)
    
    
    const shelterId = ShelterAndCityINfo.shelterId
    console.log("shelterId------------>",shelterId)
    const cityId = ShelterAndCityINfo.cityId
    console.log("cityId------------>",cityId)
    const route = `${APIGATEWAY_URL}/pets/${cityId}?shelterId=${shelterId}`
  
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFollowUpTransits(shelterId))
      }, [dispatch])

      useEffect(()=>{
        dispatch(getPetsForDashboard(route))
      },[dispatch ])


    const allFollowUpTransits = useSelector(state => state.followUpTransits)
    console.log("allFollowUpTransits---------------------->", allFollowUpTransits)
    const petsFromShelter = useSelector( state => state.petsForDashboard )


    const [petData, setPetData] = useState('')
    const [data, setData] = useState('')

    useEffect(() => {
        const filteredPets = petsFromShelter.filter(el => el.petStatusId !== 2)
        setPetData(filteredPets)
        setData(allFollowUpTransits)
    }, [petsFromShelter])

    console.log("data-------------------->", data)

    const [editedFormData, seteditedFormData] = useState({
        petsAssigned: '',
    })

    const handleEditedFormChange = (event) => {
    event.preventDefault();
    seteditedFormData({
        ...editedFormData,
        [event.target.name]: event.target.value
        
    })}

    const [editableTransitId, setEditableTransitId] = useState('')



    const handleEditClick = (event, data) => {
        event.preventDefault();
        setEditableTransitId(data.id)
        const formValues = {
            petsAssigned: data.petsAssigned,
        }
        seteditedFormData(formValues)    
    }

    const handleEditedFormSubmit =  async (event) => {
        event.preventDefault();
        // await dispatch(editFollowUp(editFollowUpId, editFormData))
        // await dispatch(getFollowUpsFromShelter(shelterId))
        setEditableTransitId(null);
    }

    const handleCancelClick = (event) => {
        event.preventDefault();
        setEditableTransitId(null);
    }

    const handleHideClick = async (event, transitId) => {
        event.preventDefault();
        const payload = {
            hideFollowUp: true
        }
        // await dispatch(hideFollowUpfromDash(transitId, payload))
        // await dispatch(getFollowUpsFromShelter(shelterId))
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
                                editedFormData={editedFormData}
                                handleEditedFormChange={handleEditedFormChange}
                                handleCancelClick={handleCancelClick}
                                />
                                ) : (
                                    <ReadOnlyRowsTransit
                                    data={data}
                                    handleEditClick={handleEditClick}
                                    handleHideClick={handleHideClick}
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