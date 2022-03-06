import React from 'react'
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect, useState, Fragment } from 'react'
import { getFollowUpsFromShelter, getFollowUpStatuses, editFollowUp, deleteFollowUp } from '../Redux/Actions'
import EditableRowsFollowUp from './EditableRowsFollowUp'
import ReadOnlyRowsFollowUp from './ReadOnlyRowsFollowUp'

const FollowUP = () => {

  const ShelterAndCityINfo = useSelector(state => state.ShelterAndCityId)
  console.log("ShelterAndCityINfo------------>",ShelterAndCityINfo)
  
  const shelterId = ShelterAndCityINfo.shelterId
  console.log("shelterId------------>",shelterId)

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
    setData(allFollowUps)
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
      [event.target.name]: event.target.value
      
    })}

    const [editFollowUpId, setEditFollowUpId] = useState('')

    const handleEditClick = (event, data) => {
      event.preventDefault();
      setEditFollowUpId(data.id)
      const formValues = {
        followUpStatusId: data.followUpStatusId,
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

    const handleDeleteClick = (event, followUpId) => {
      event.preventDefault();
      dispatch(deleteFollowUp(followUpId))
      dispatch(getFollowUpsFromShelter(shelterId))
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

export const Center = styled.div`
position: relative;
min-height: calc(100vh - 170px);
display: grid;
`

export const CenterChild = styled.div`
position: relative;
align-self: center;
justify-self: center;
font-size: 10px;
`

export const Table = styled.table`

.app-container {
display: flex;
flex-direction: column;
gap: 10px;
padding: 1rem;
}

table {
border-collapse: collapse;
width: 100%;
}

th,
td {
border: 1px solid #ffffff;
text-align: left;
padding: 8px;
font-size: 12px;
}

th {
background-color: #63ac44;
color: #ffffff;
}

td {
background-color: #ddf4ff;
}

form {
display: flex;
gap: 5px;
}

form td:last-child {
display: flex;
justify-content: space-evenly;
}

form * {
font-size: 28px;
}
`