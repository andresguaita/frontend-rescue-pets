import React from 'react'
import {
    Container, Center, CenterChild ,Table,Button,Button3
  } from "../Styles/StyledPetsInDashboard"
  

const EditableRows = ({editFormData, handleEditFormChange, handleCancelClick, allSpecies, allTemperaments, allPetStatus, allAges, allGenres}) => {
    
    const stringy = editFormData.sterilization.toString()
    
    console.log("editFormData.sterilization", editFormData.sterilization)
    console.log("stringy", stringy)
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
                <option value="editFormData.sterilization" hidden name='default' >{(editFormData.sterilization2.toString())}</option>
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
                <option hidden value="editFormData.speciesId" name='default' >{editFormData.species2.specie}</option>
                    {allSpecies?.map(el => 
                        <option key={el.id} value={el.id}>{el.specie}</option>   
                    )
                }
            </select>
        </td>
        <td>
            <select name='temperament' onChange={handleEditFormChange}>
                <option hidden value="editFormData.temperament" name='default' >{editFormData.temperament2.temperament}</option>
                {allTemperaments?.map(el => 
                        <option key={el.id} value={el.id}>{el.temperament}</option>   
                    )
                }
            </select>
        </td>
        <td>
            <select name='age' onChange={handleEditFormChange}>
                <option hidden value="editFormData.age" name='default' >{editFormData.age2.age}</option>
                {allAges?.map(el => 
                        <option key={el.id} value={el.id}>{el.age}</option>   
                    )
                }
            </select>
        </td>
        <td>
            <select name='petStatus' onChange={handleEditFormChange}>
                <option hidden value="editFormData.petStatus" name='default' >{editFormData.petStatus2.status}</option>
                {allPetStatus?.map(el => 
                        <option key={el.id} value={el.id}>{el.status}</option>   
                    )
                }
            </select>
        </td>
        <td>
        <select name='genreId' onChange={handleEditFormChange}>
                <option hidden value="editFormData.genreId" name='default' >{editFormData.genre2.genre}</option>
                {allGenres?.map(el => 
                        <option key={el.id} value={el.id}>{el.genre}</option>   
                    )
                }
            </select>
        </td>
        <td>
            <Button type='submit' >Guardar</Button>
            <Button type='button' onClick={handleCancelClick}>Cancelar</Button>
        </td>
    </tr>
  )
}

export default EditableRows