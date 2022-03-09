import React from 'react'
import { Button } from "../Styles/StyledPetsInDashboard"


const ReadOnlyRowsFollowUp = ({data, handleEditClick, handleDeleteClick, handleSendReminder}) => {
    
    return (
        <tr key={data.id}>
            <td>{data.followUpStatus.followUpStatus}</td>
            {/* {data.sterilization? <td>True</td> : <td>False</td> } */}
            <td>{data.pet.name}</td>
            <td>{data.profile.name} {data.profile.lastName}</td>
            <td>{data.user.email}</td>
            <td>{data.profile.address}</td>
            <td>{data.profile.phoneNumber}</td>
            <td>{
                
                    data.followUpDate1? <div>{data.followUpDate1.slice(0,10)}
                    <Button type='button' onClick={(event) => handleSendReminder(event, data.id, data.followUpDate1.slice(0,10))}>Enviar recordatorio</Button>
                    </div>
                    : <div>Sin fecha asignada</div>
                }    
            </td>
            <td>{
                
                data.followUpDate2? <div>{data.followUpDate2.slice(0,10)}
                <Button type='button' onClick={(event) => handleSendReminder(event, data.id, data.followUpDate2.slice(0,10))}>Enviar recordatorio</Button>
                </div>
                : <div>Sin fecha asignada</div>
            }    
            </td>
            <td>{
                
                data.followUpDate3? <div>{data.followUpDate3.slice(0,10)}
                <Button type='button' onClick={(event) => handleSendReminder(event, data.id, data.followUpDate3.slice(0,10))}>Enviar recordatorio</Button>
                </div>
                : <div>Sin fecha asignada</div>
            }    
            </td>
            {/* <td>{data.followUpDate2? data.followUpDate2.slice(0,10) : null}</td>
            <td>{data.followUpDate3? data.followUpDate3.slice(0,10) : null}</td> */}
            <td>
                <Button type='button' onClick={(event) => handleEditClick(event, data)}>Editar</Button>
                <Button type='button' onClick={(event) => handleDeleteClick(event, data.id)}>Ocultar</Button>
            </td>
        </tr>
    )
}

export default ReadOnlyRowsFollowUp