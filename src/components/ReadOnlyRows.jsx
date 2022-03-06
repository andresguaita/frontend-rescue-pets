import React from 'react'


const ReadOnlyRows = ({data, handleEditClick, handleDeleteClick}) => {
    
    return (
        <tr key={data.id}>
            <td>{data.name}</td>
            {data.sterilization? <td>True</td> : <td>False</td> }
            <td>{data.weight}</td>
            <td>{data.description}</td>
            <td>{data.image}</td>
            <td>{data.speciesId}</td>
            {data.temperament.temperament? 
                <td>{data.temperament.temperament}</td> :
                <td>{data.temperament}</td> 
                // ? <td>Holi</td> : null
            }
            {data.age.age ? <td>{data.age.age}</td> :
             <td>{data.age}</td>
            }
            {data.petStatus.status ? <td>{data.petStatus.status}</td> :
            <td>{data.petStatus}</td>
            }
            <td>{data.genreId}</td>
            <td>
                <button type='button' onClick={(event) => handleEditClick(event, data)}>Editar</button>
                <button type='button' onClick={(event) => handleDeleteClick(event, data.id)}>Eliminar</button>
            </td>
        </tr>
    )
}

export default ReadOnlyRows