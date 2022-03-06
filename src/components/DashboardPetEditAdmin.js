import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { StyledDashboardPetAdmin,StyledButtonEditAdminPet, StyledSelectForDashboardPetEditAdmin,StyledDivFlexAdmin, StyledDivFlexColumnAdmin, StyledInputForDashboardPetEditAdmin } from '../Styles/StyledDashboardPetAdmin'


export const DashboardPetEditAdmin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()


    /// obtengo el id del pet ↓
    const {info} = useParams()
    // let info2 = info.split(',')
    /// obtengo el id del pet ↑


    /// estado para traer info del pet ↓
    const pet = useSelector((state) => state.individualPetForAdmin)
    /// estado para traer info del pet ↑
    
    
    /// estados para traer las props

    /// estados para traer las props
     useEffect(()=>{
        if(pet[0]){setcurrentpet(pet[0])}
    },[pet])
    

    /// estado local para guardar info de pet obtenida ↓
    const [currentpet, setcurrentpet] = useState({
        id:'',
        name:'',
        sterilization:'',
        weight:'',
        speciesId:'',
        ageId:'',
        petStatusId:'',
        genreId:'',
        hideFromDash:'',
        image:'',
        shelterId:''
    })
    /// estado local para guardar info de pet obtenida ↑


    const Back = () => {
        navigate("/admin/dashboard/DashboardPetAdmin/")
    }
    return (
            <StyledDashboardPetAdmin>
                <button onClick={Back}>Regresar</button>
                <br></br>
                <h1>Formato de edición de mascota</h1>
                <br></br>
                <StyledDivFlexAdmin>
                    <StyledButtonEditAdminPet><i className="fas fa-edit"></i></StyledButtonEditAdminPet>
                </StyledDivFlexAdmin>
                
                <StyledDivFlexAdmin>

                    <StyledDivFlexColumnAdmin>
                        <label>Nombre</label>
                        <StyledInputForDashboardPetEditAdmin type="text" placeholder=' Nombre...' value={currentpet.name}/>
                        
                        <label>Especie</label>
                        <StyledSelectForDashboardPetEditAdmin name='speciesId' value={currentpet.speciesId}>
                            <option value={1}>Uno</option>
                            <option value={2}>Dos</option>
                            <option value={3}>Tres</option>
                        </StyledSelectForDashboardPetEditAdmin>

                        <label>Edad</label>
                        <StyledSelectForDashboardPetEditAdmin name='ageId' value={currentpet.ageId}>
                            <option></option>
                        </StyledSelectForDashboardPetEditAdmin>

                        <label>Esterilizado</label>
                        <StyledSelectForDashboardPetEditAdmin name='sterilization' value={currentpet.sterilization}>
                            <option></option>
                        </StyledSelectForDashboardPetEditAdmin>

                        <label>Estatus</label>
                        <StyledSelectForDashboardPetEditAdmin name='petStatus' value={currentpet.petStatusId}>
                            <option></option>
                        </StyledSelectForDashboardPetEditAdmin>

                        

                    </StyledDivFlexColumnAdmin>


                    <StyledDivFlexColumnAdmin>

                        <label>Peso</label>
                        <StyledInputForDashboardPetEditAdmin type="text" placeholder=' Peso...' value={currentpet.weight}/>


                        <label>Género</label>
                        <StyledSelectForDashboardPetEditAdmin name='genreId' value={currentpet.genreId}>
                            <option></option>
                        </StyledSelectForDashboardPetEditAdmin>

                        <label>Hide</label>
                        <StyledSelectForDashboardPetEditAdmin name='hideFromDash' value={currentpet.hideFromDash}>
                            <option></option>
                        </StyledSelectForDashboardPetEditAdmin>

                        <label>Refugio</label>
                        <StyledSelectForDashboardPetEditAdmin name='shelterId' value={currentpet.shelterId}>
                            <option></option>
                        </StyledSelectForDashboardPetEditAdmin>

                        <label>Imagenes</label>
                        <StyledSelectForDashboardPetEditAdmin name='image' value={currentpet.image}>
                            <option></option>
                        </StyledSelectForDashboardPetEditAdmin>

                    </StyledDivFlexColumnAdmin>

                </StyledDivFlexAdmin>

            
                <div className='contentImages'>
                    <div className='imagesEdit'>Images</div>
                    <div className='imagesEdit'>Images</div>
                    <div className='imagesEdit'>Images</div>
                    <div className='imagesEdit'>Images</div>
                    <div className='imagesEdit'>Images</div>
                </div>
              
                
            </StyledDashboardPetAdmin>
    )
}