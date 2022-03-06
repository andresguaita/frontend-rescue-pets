import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { StyledButtonEditAdminPet, StyledSelectForDashboardPetEditAdmin,
    StyledDivFlexAdmin, StyledDivFlexColumnAdmin, StyledDashboardPetModal,StyledButtonDeleteAdminPet} from '../Styles/StyledDashboardPetAdmin'
import {editPetFromAdmin} from '../Redux/Actions'   


export const DashboardPetEditAdmin = ({id,hideFromDash,name,setActive}) => {
    const dispatch = useDispatch()


    /// estado local para guardar info de pet obtenida ↓
    const [currentpet, setcurrentpet] = useState({
        id:id,
        hideFromDash:hideFromDash
    })
    /// estado local para guardar info de pet obtenida ↑


    /// guardar cambios en el estado local ↓
    const handleSelect = (e) => {
        setcurrentpet({
            ...currentpet,
            [e.target.name] : e.target.value == 'true'? true : false
        })
    }
    /// guardar cambios en el estado local ↑


    /// envio de datos para ser modificados ↓
    const handleSubmit = () => {
        dispatch(editPetFromAdmin(currentpet))
        alert('Hide editado con éxito')
    }
    /// envio de datos para ser modificados ↑


    const Back = () => {
        setActive(false)
    }

    return (
            <StyledDashboardPetModal>
                <StyledDivFlexAdmin> 
                    <StyledDivFlexColumnAdmin>
                    <StyledButtonDeleteAdminPet onClick={Back}><i class="fas fa-reply"></i></StyledButtonDeleteAdminPet>
                        <br></br>
                    <StyledButtonEditAdminPet onClick={handleSubmit} ><i className="fas fa-edit"></i></StyledButtonEditAdminPet>  
                        <br></br>
                        <h1>Visivilidad de {name}</h1>
                        {/* setear el hide de la mascota ↓ */}
                        <br></br>
                        <h2>Hide</h2>
                        <StyledSelectForDashboardPetEditAdmin name='hideFromDash' value={currentpet.hideFromDash} onChange={e => handleSelect(e)}>
                            <option key="h1" value={true}>True</option>
                            <option key="h2" value={false}>False</option>
                        </StyledSelectForDashboardPetEditAdmin>
                        {/* setear el hide de la mascota ↑ */}

                    </StyledDivFlexColumnAdmin>

                </StyledDivFlexAdmin>
            </StyledDashboardPetModal>
    )
}