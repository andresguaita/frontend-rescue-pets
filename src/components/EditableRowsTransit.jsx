import React from 'react'

const EditableRowsTransit = ({data, editedFormData, handleEditedFormChange, handleCancelClick}) => {
    
    
  return (
    <tr>
        <td>{data.profile.name} {data.profile.lastName}</td>
        <td>{data.user.email}</td>
        <td>{data.profile.address}</td>
        <td>{data.profile.phoneNumber}</td>
        {data.profile.petsAssigned ? 
            <td>{data.profile.petsAssigned}</td> : <td>Sin mascotas asignadas</td>
        }

        <td>
            <button type='submit' >Guardar</button>
            <button type='button' onClick={handleCancelClick}>Cancelar</button>
        </td>
    </tr>
  )
}



export default EditableRowsTransit