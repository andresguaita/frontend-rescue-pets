import React from 'react'
import { LongInput } from '../Styles/StyledPetsInDashboard'

const EditableRowsFollowUp = ({data, editFormData, handleEditFormChange, handleCancelClick, allFollowUpStatuses}) => {
    
    
  return (
    <tr>
        <td>
            <select name='followUpStatusId' onChange={handleEditFormChange}>
                <option hidden value={editFormData.followUpStatusId} name='default' >{editFormData.followUpStatus.followUpStatus}</option>
                    {allFollowUpStatuses?.map(el => 
                        <option key={el.id} value={el.id}>{el.followUpStatus}</option>   
                    )
                }
            </select>
        </td>
        <td>{data.pet.name}</td>
        <td>{data.profile.name} {data.profile.lastName}</td>
        <td>{data.user.email}</td>
        <td>{data.profile.address}</td>
        <td>{data.profile.phoneNumber}</td>
        <td>
            <LongInput
            type="date"
            // required="required"
            // placeholder='Capture fecha...'
            name='followUpDate1'
            value={editFormData.followUpDate1? editFormData.followUpDate1.slice(0,10) : null }
            onChange={handleEditFormChange}
            ></LongInput>
        </td>
        <td>
            <input
            type="date"
            // required="required"
            // placeholder='Capture fecha...'
            name='followUpDate2'
            value={editFormData.followUpDate2? editFormData.followUpDate2.slice(0,10) : null}
            onChange={handleEditFormChange}
            ></input>
        </td>
        <td>
            <input
            type="date"
            // required="required"
            // placeholder='Capture fecha...'
            name='followUpDate3'
            value={editFormData.followUpDate3? editFormData.followUpDate3.slice(0,10) : null}
            onChange={handleEditFormChange}
            ></input>
        </td>
        <td>
            <button type='submit' >Guardar</button>
            <button type='button' onClick={handleCancelClick}>Cancelar</button>
        </td>
    </tr>
  )
}



export default EditableRowsFollowUp