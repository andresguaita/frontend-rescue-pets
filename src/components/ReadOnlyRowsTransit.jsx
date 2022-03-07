import React from 'react'


const ReadOnlyRowsTransit = ({data, handleEditClick, handleHideClick}) => {
    
    return (
        <tr key={data.id}>
            <td>{data.profile.name} {data.profile.lastName}</td>
            <td>{data.user.email}</td>
            <td>{data.profile.address}</td>
            <td>{data.profile.phoneNumber}</td>
            {data.petsAssigned ? data.petsAssigned.map(el => 
                <div>
                    <td>{el.name}</td>
                </div>
            )
            : <td>Sin mascotas asignadas</td>
        }
            <td>
                <button type='button' onClick={(event) => handleEditClick(event, data)}>Editar</button>
                <button type='button' onClick={(event) => handleHideClick(event, data.id)}>Ocultar</button>
            </td>
        </tr>
    )
}

export default ReadOnlyRowsTransit