import React from 'react'
// import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect, useState, Fragment } from 'react'
import { getFollowUpsFromShelter, getFollowUpStatuses, editFollowUp, sendEmailReminder, hideFollowUpfromDash } from '../Redux/Actions'
import EditableRowsFollowUp from './EditableRowsFollowUp'
import ReadOnlyRowsFollowUp from './ReadOnlyRowsFollowUp'

import {
  Container, Center, CenterChild ,Table,Button,Button3, 
} from "../Styles/StyledPetsInDashboard"



const FollowUP = () => {

  const ShelterAndCityINfo = useSelector(state => state.ShelterAndCityId)
  // console.log("ShelterAndCityINfo------------>",ShelterAndCityINfo)
  
  const shelterId = ShelterAndCityINfo.shelterId
  // console.log("shelterId------------>",shelterId)

  const dispatch = useDispatch();
  const allFollowUpStatuses = useSelector(state => state.followUpStatuses)
  const allFollowUps = useSelector(state => state.followUps)

  useEffect(() => {
    dispatch(getFollowUpsFromShelter(shelterId))
  }, [dispatch])

  useEffect(() => {
    dispatch(getFollowUpStatuses())
  }, [])
  

  // console.log("allFollowUps---------------->", allFollowUps)

  const [data, setData] = useState('')

  useEffect(() => {
    const filteredFollowUps = allFollowUps.filter(el => el.hideFollowUp === false)
    setData(filteredFollowUps)
  }, [allFollowUps])

  const [editFormData, seteditFormData] = useState({
    followUpStatusId: '',
    followUpDate1: '',
    followUpDate2: '',
    followUpDate3: '',
  })

  const handleEditFormChange = (event) => {
    event.preventDefault();
    seteditFormData({
      ...editFormData,
      [event.target.name]: event.target.value === "" ? null : event.target.value
      
    })}

    const [editFollowUpId, setEditFollowUpId] = useState('')

    const handleEditClick = (event, data) => {
      event.preventDefault();
      setEditFollowUpId(data.id)
      const formValues = {
        followUpStatusId: data.followUpStatusId,
        followUpStatus: data.followUpStatus,
        followUpDate1: data.followUpDate1,
        followUpDate2: data.followUpDate2,
        followUpDate3: data.followUpDate3,
      }
      seteditFormData(formValues)
      
      
    }


    const handleEditedFormSubmit =  async (event) => {
      event.preventDefault();
      await dispatch(editFollowUp(editFollowUpId, editFormData))
      await dispatch(getFollowUpsFromShelter(shelterId))
      setEditFollowUpId(null);

    }

    const handleCancelClick = (event) => {
      event.preventDefault();
      setEditFollowUpId(null);
    }

    const handleDeleteClick = async (event, followUpId) => {
      event.preventDefault();
      const payload = {
        hideFollowUp: true
      }
      // await dispatch(deleteFollowUp(followUpId))
      await dispatch(hideFollowUpfromDash(followUpId, payload))
      await dispatch(getFollowUpsFromShelter(shelterId))
    }

    
    const handleSendReminder = async (event, followUpId, date) => {
      event.preventDefault();
      const payload = {
        followUpId: followUpId,
        date: date
      }
      // console.log("followUpId--------------->", followUpId)
      // console.log("date--------------->", date)
      await dispatch(sendEmailReminder(payload))
      await dispatch(getFollowUpsFromShelter(shelterId))
    }

  return (
    <Center>
        <CenterChild>
        <form onSubmit={handleEditedFormSubmit}>
          <Table>
              <thead>
              <tr>
                  <th>Estado de seguimiento</th>
                  <th>Nombre de la Mascota</th>
                  <th>Nombre del Adoptante</th>
                  <th>E-mail del Adoptante</th>
                  <th>Dirección</th>
                  <th>Teléfono</th>
                  <th>Fecha de seguimiento 1</th>
                  <th>Fecha de seguimiento 2</th>
                  <th>Fecha de seguimiento 3</th>
                  <th>Acciones</th>
              </tr>
              </thead>
              <tbody>
              {
                typeof(data) !== "string" && data.length? data.map(data => 
                  <Fragment>
                    {editFollowUpId === data.id ? (
                      <EditableRowsFollowUp
                        data={data}
                        allFollowUpStatuses={allFollowUpStatuses}
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                        />
                        ) : (
                          <ReadOnlyRowsFollowUp
                          data={data}
                          handleEditClick={handleEditClick}
                          handleDeleteClick={handleDeleteClick}
                          handleSendReminder={handleSendReminder}
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

export default FollowUP
