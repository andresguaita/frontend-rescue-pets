import React from 'react'

const EditableRowsFollowUp = ({data, editFormData, handleEditFormChange, handleCancelClick, allFollowUpStatuses}) => {
    
    
  return (
    <tr>
        <td>
            <select name='followUpStatusId' onChange={handleEditFormChange}>
                <option hidden name='default' >Status</option>
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
            <input
            type="date"
            // required="required"
            placeholder='Capture fecha...'
            name='followUpDate1'
            value={editFormData.followUpDate1}
            onChange={handleEditFormChange}
            ></input>
        </td>
        <td>
            <input
            type="date"
            // required="required"
            placeholder='Capture fecha...'
            name='followUpDate2'
            value={editFormData.followUpDate2}
            onChange={handleEditFormChange}
            ></input>
        </td>
        <td>
            <input
            type="date"
            // required="required"
            placeholder='Capture fecha...'
            name='followUpDate3'
            value={editFormData.followUpDate3}
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