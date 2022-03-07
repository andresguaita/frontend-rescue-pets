import React from 'react'

const EditableRowsTransit = ({data, petData, editedFormData, handleEditedFormChange, handleCancelClick}) => {
    console.log("petData----------------------->",petData)
    console.log("editedFormData-------------->", editedFormData)
    let result = petData.filter(o1 => !editedFormData.some(o2 => o1.id === o2.id));
    console.log("result-------------->", result)
    
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
            result.length? 
            <select name='petsAssigned' onChange={handleEditedFormChange}>
            <option hidden value='none' >Agregar nuevas mascotas</option>
                {result.map(el => 
                    <option key={el.id} name='petsAssigned' value={[el.id, el.name]}>{el.name}</option>   
                )}
                  
              
          </select> :
          <div>No hay más mascotas disponibles</div>

          }

                          {/* {editedFormData.petsAssigned.map(el=> 
                    <div key={el}>
                      <div>{el}</div>
                    </div>
                  
                  )} */}

          
        </td>
        <td>
            <button type='submit' >Guardar</button>
            <button type='button' onClick={handleCancelClick}>Cancelar</button>
        </td>
    </tr>
  )
}



export default EditableRowsTransit