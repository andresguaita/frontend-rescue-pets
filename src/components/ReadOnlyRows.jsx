import React from 'react';
import Del from "../Icos/del.png";
import Edi from "../Icos/edit.png";


import {
    Container, Center, CenterChild ,Table,Button,Button3
  } from "../Styles/StyledPetsInDashboard"

const ReadOnlyRows = ({data, handleEditClick, handleDeleteClick}) => {
    
    return (
        <tr key={data.id}>
            <td>{data.name}</td>
            {data.sterilization? <td>True</td> : <td>False</td> }
            <td>{data.weight}</td>
            <td>{data.description}</td>
            <td><img src={data.image} className="icos20"></img> </td>
            <td>{data.species.specie}</td>
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
            <td>{data.genre.genre}</td>
            <td>
                <Button type='button' onClick={(event) => handleEditClick(event, data)}>Editar</Button>
                <Button type='button' onClick={(event) => handleDeleteClick(event, data.id)}>Ocultar</Button>
            </td>
        </tr>
    )
}

export default ReadOnlyRows