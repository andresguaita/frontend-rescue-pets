import {Button} from '../Styles/StyledFollowUpTransit'

const ReadOnlyRowsTransit = ({data, handleEditClick, handleHideClick, handleRemovefromTransit}) => {
    
    return (
        <tr key={data.id}>
            <td>{data.profile.name} {data.profile.lastName}</td>
            <td>{data.user.email}</td>
            <td>{data.profile.address}</td>
            <td>{data.profile.phoneNumber}</td>
            {Array.isArray(data.petsAssigned) ? data.petsAssigned.map(el => 
                <div>
                    <td>{el.name}<Button type='button' onClick={(event)=> handleRemovefromTransit(event, el.id, el, data.id)}>X</Button></td>
                    
                </div>
            )
            : <td>Sin mascotas asignadas</td> 
        }
            <td>
                <Button type='button' onClick={(event) => handleEditClick(event, data)}>Editar</Button>
                <Button type='button' onClick={(event) => handleHideClick(event, data.id)}>Ocultar</Button>
            </td>
        </tr>
    )
}

export default ReadOnlyRowsTransit
