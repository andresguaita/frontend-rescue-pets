import React from 'react'

const EditableRows = ({editFormData, handleEditFormChange, handleCancelClick, allSpecies, allTemperaments, allPetStatus, allAges, allGenres}) => {
    
    
  return (
    <tr>
        <td>
            <input
            type="text"
            required="required"
            placeholder='Registre un nombre...'
            name='name'
            value={editFormData.name}
            onChange={handleEditFormChange}
            ></input>
        </td>
        <td>
            <select name='sterilization' onChange={handleEditFormChange}>
                <option hidden name='default' >Esterelización</option>
                <option name='sterilization' value="true" >True</option>
                <option name='sterilization' value="false" >False</option>
            </select>
        </td>
        <td>
            <input
            type="number"
            step="0.1"
            required="required"
            placeholder='Registre peso...'
            name='weight'
            value={editFormData.weight}
            onChange={handleEditFormChange}
            ></input>
        </td>
        <td>
            <input
            type="text"
            required="required"
            placeholder='Capture descripción...'
            name='description'
            value={editFormData.description}
            onChange={handleEditFormChange}
            ></input>
        </td>
        <td>
            <input
            type="text"
            required="required"
            placeholder='Capture enlace de imágenes...'
            name='image'
            value={editFormData.image}
            onChange={handleEditFormChange}
            ></input>
        </td>
        <td>
            <select name='speciesId' onChange={handleEditFormChange}>
                <option hidden name='default' >Especie</option>
                    {allSpecies?.map(el => 
                        <option key={el.id} value={el.id}>{el.specie}</option>   
                    )
                }
            </select>
        </td>
        <td>
            <select name='temperament' onChange={handleEditFormChange}>
                <option hidden name='default' >Temperamento</option>
                {allTemperaments?.map(el => 
                        <option key={el.id} value={el.id}>{el.temperament}</option>   
                    )
                }
            </select>
        </td>
        <td>
            <select name='age' onChange={handleEditFormChange}>
                <option hidden name='default' >Edad</option>
                {allAges?.map(el => 
                        <option key={el.id} value={el.id}>{el.age}</option>   
                    )
                }
            </select>
        </td>
        <td>
            <select name='petStatus' onChange={handleEditFormChange}>
                <option hidden name='default' >Estado</option>
                {allPetStatus?.map(el => 
                        <option key={el.id} value={el.id}>{el.status}</option>   
                    )
                }
            </select>
        </td>
        <td>
        <select name='genreId' onChange={handleEditFormChange}>
                <option hidden name='default' >Género</option>
                {allGenres?.map(el => 
                        <option key={el.id} value={el.id}>{el.genre}</option>   
                    )
                }
            </select>
        </td>
        <td>
            <button type='submit' >Guardar</button>
            <button type='button' onClick={handleCancelClick}>Cancelar</button>
        </td>
    </tr>
  )
}

export default EditableRows