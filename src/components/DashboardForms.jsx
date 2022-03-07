import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {checkForm, deleteAnswerForm, getForms, getFormtypes, getPetsForDashboard, resetIndivualForm} from '../Redux/Actions/index'
import { Link, useNavigate } from 'react-router-dom'
import {StyleButton, StyleButtonBack, StyleButtonRejected, StyleButtonView} from '../Styles/StyledButtons.js';
import { StyledDashboardForms, Left } from '../Styles/StyledDashboardForms'
import { APIGATEWAY_URL } from '../utils/constant'
import Img from "../Icos/homeim1.svg"
import trash from "../Icos/trash-solid.svg"

export const DashboardForms= () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const iduser = useSelector((state) => state.id)
    const forms = useSelector((state) => state.forms)
    const formtypes = useSelector((state) => state.formtypes)
    const pet = useSelector( state => state.petsForDashboard )
    const routeInfo = useSelector(state => state.ShelterAndCityId)
    const route = `${APIGATEWAY_URL}/pets/${routeInfo.cityId}?shelterId=${routeInfo.shelterId}`
    const check = useSelector((state) => state.checkForm)
    // let alreadyData = typeof(forms) !== 'string' && forms.length? forms[0].form.formtypeId : null
    const [typeform, settypeform] = useState()

    
    useEffect(() => {
        dispatch(getFormtypes(routeInfo.shelterId))
        dispatch(checkForm(routeInfo.shelterId))
        dispatch(resetIndivualForm())
        if(routeInfo)dispatch(getPetsForDashboard(route))
    }, [dispatch])

    
    let filterimages = typeof(pet) !== 'string'? pet.map(e => {return {id:e.id,image:e.image}}) : null

    const handleSubmitGetForm = (e) => {
        if(Number(e.target.value) === 2){
            settypeform('Adopción')
        }
        if(Number(e.target.value) === 1){
            settypeform('Tránsito')
        }
        dispatch(getForms(iduser,e.target.value))
    }

    const handleClick = ()=> {
        navigate('/dashboard')
    }

    const handleDeleteAdoption = async (e) => {
        await dispatch(deleteAnswerForm(Number(e),'adoption'))
        await dispatch(getForms(iduser,2))
    }

    const handleDeleteRequest = async (e) => {
        await dispatch(deleteAnswerForm(Number(e),'request'))
        await dispatch(getForms(iduser,1))
    }

    useEffect(() => {
        if(forms.length && typeof(forms) !== 'string' && !typeform){
            let temp = forms[0].form.formtypeId === 2 ? 'Adopción' : forms[0].form.formtypeId === 1 ? 'Tránsito' : 'otro'
            settypeform(temp)
            dispatch(getForms(iduser,forms[0].form.formtypeId))
        }
        
    },[typeform,check])
   
    return (
            <StyledDashboardForms>
               
                    <StyleButtonBack onClick={handleClick}>{"<"}</StyleButtonBack>
                    <h1>Tabla de formularios de {typeform}</h1>
                    
                    <select name='opcion' onChange={e => handleSubmitGetForm(e)}>
                        <option disabled selected>
                            -- Seleccione --
                        </option>
                        {typeof(formtypes) !== 'string'? formtypes.map(element => (
                            <option name={element.typeName} key={element.id} value={element.id}> {element.typeName}</option>
                        )): 
                        typeof(formtypes) === 'string'? (<option>{formtypes}</option>): <option>Cargando...</option>}
                    </select>
                
                {forms.length && typeof(forms) !== 'string'  && typeof(formtypes) !== 'string' && formtypes.length && formtypes[0].typeName === typeform && forms[0].form.formtypeId === 2? (<table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Respuestas</th>
                                <th>Mascota Id</th>
                                <th>Estado</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                        {typeof(forms) !== 'string'? forms.map(element => (
                            <tr key={element.id}>
                                <td>{element.id}</td>
                                <td><Link to={`view/${element.id}/${formtypes[0].id}/${element.petId}/${forms[0].formId}`}><StyleButtonView>Ver Formulario</StyleButtonView></Link></td>
                                <td>
                                {filterimages ? filterimages.map(e => {
                                    if(e.id === Number(element.petId))
                                    {return (<div><div><h4>{element.petId}</h4></div><div><img src={`${e.image}`} width="100" height="100" /></div></div>)
                                    }
                                }): <h1>No lo obtiene</h1>}
                                </td>
                                <td>{element.status == true ? 'Aceptado':element.status == false? 'Rechazado': 'Por revisar'}</td>
                                <td><StyleButtonRejected onClick={() => handleDeleteAdoption(element.id)}><i class="fas fa-trash"></i></StyleButtonRejected></td>
                            </tr>
                        )):typeof(forms) === 'string' ? (<td>{forms}</td>): (<h1>Cargando...</h1>)}
                        </tbody>
                </table>):
                
                forms.length && typeof(forms) !== 'string'  && typeof(formtypes) !== 'string' && formtypes.length && formtypes[1].typeName === typeform && forms[0].form.formtypeId === 1?(<table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Respuestas</th>
                            <th>Estado</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {typeof(forms) !== 'string' ? forms.map(element => (
                            <tr key={element.id}>
                                <td>{element.id}</td>
                                <td><Link to={`view/${element.id}/${formtypes[1].id}/${1}/${forms[0].formId}`}><StyleButtonView>Ver Formulario</StyleButtonView></Link></td>
                                <td>{element.status == true ? 'Aceptado':element.status == false? 'Rechazado': 'Por revisar'}</td>
                                <td><StyleButtonRejected onClick={() => handleDeleteRequest(element.id)}><i class="fas fa-trash"></i></StyleButtonRejected></td>
                            </tr>
                        )):typeof(forms) === 'string' ? (<td>{forms}</td>): (<h1>Cargando...</h1>)}
                    </tbody>
            </table>):(<h1>No hay datos para mostrar</h1>)}
                
            </StyledDashboardForms>
    )
}