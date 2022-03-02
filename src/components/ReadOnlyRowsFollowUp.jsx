import React from 'react'


const ReadOnlyRowsFollowUp = ({data, handleEditClick, handleDeleteClick}) => {
    
    return (
        <tr key={data.id}>
            <td>{data.followUpStatus.followUpStatus}</td>
            {/* {data.sterilization? <td>True</td> : <td>False</td> } */}
            <td>{data.pet.name}</td>
            <td>{data.profile.name} {data.profile.lastName}</td>
            <td>{data.user.email}</td>
            <td>{data.profile.address}</td>
            <td>{data.profile.phoneNumber}</td>
            <td>{data.followUpDate1}</td>
            <td>{data.followUpDate2}</td>
            <td>{data.followUpDate3}</td>
            <td>
                <button type='button' onClick={(event) => handleEditClick(event, data)}>Editar</button>
                <button type='button' onClick={(event) => handleDeleteClick(event, data.id)}>Eliminar</button>
            </td>
        </tr>
    )
}

export default ReadOnlyRowsFollowUp