import React from 'react'

const EditableRowsTransit = ({data, petData, editedFormData, seteditedFormData, handleEditedFormChange, handleCancelClick}) => {
    console.log("petData----------------------->",petData)
    console.log("editedFormData-------------->", editedFormData)
    let result = petData.filter(o1 => !editedFormData.some(o2 => o1.id === o2.id));
    console.log("result-------------->", result)
    console.log("data------------>",data)

    const handleDeletePetFromList = (el) => {
      console.log("handleDeletePetFromList element ---->", el)
      seteditedFormData(
        editedFormData.filter(param => param !== el)
      )
      console.log("editFormData del handleDelete ---->", editedFormData)
  }
    
  return (
    <tr>
        <td>{data.profile.name} {data.profile.lastName}</td>
        <td>{data.user.email}</td>
        <td>{data.profile.address}</td>
        <td>{data.profile.phoneNumber}</td>
        {/* {data.profile.petsAssigned ? 
            <td>{data.profile.petsAssigned}</td> : <td>Sin mascotas asignadas</td>
        } */}
        <td>

          {
            data.petsAssigned !== null && data.petsAssigned.length ? data.petsAssigned.map(el =>
              <div>{el.name}</div>
              ) : null
          }

          {
            result.length? 
            <select name='petsAssigned' onChange={handleEditedFormChange}>
            <option hidden value='none' >Agregar nuevas mascotas</option>
                {result.map(el => 
                    <option key={el.id} name='petsAssigned' value={[el.id, el.name]}>{el.name}</option>   
                )}
                  
              
          </select> :
          <div>No hay más mascotas disponibles</div>

          }

          {editedFormData?.map(el=> 
          <div key={el.id}>
          <div>{el.name}</div>
          <button type='button' onClick={() => handleDeletePetFromList(el)}>X</button>

          </div>

          )}

          
        </td>
        <td>
            <button type='submit' >Guardar</button>
            <button type='button' onClick={handleCancelClick}>Cancelar</button>
        </td>
    </tr>
  )
}


export default EditableRowsTransit

