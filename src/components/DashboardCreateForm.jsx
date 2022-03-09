import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Left, Right, StyledDashboardForms } from '../Styles/StyledDashboardForms'
import { editForm, getAllQuestions, getFormByShelter, getFormtypes, postCreateForm } from '../Redux/Actions/index'
import {StyleButtonAccepted, StyleButtonBack, StyleButtonRejected, StyleButtonMini} from '../Styles/StyledButtons.js';
import { useState } from "react"
import Img from "../Icos/homeim1.svg"
import trash from "../Icos/trash-solid.svg"
import Swal from "sweetalert2"

export const DashboardCreateForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const existingform = useSelector((state) => state.formbyshelter)
    const shelterid = useSelector(state => state.ShelterAndCityId)
    const questions = useSelector((state) => state.allQuestions)
    const formtypes = useSelector((state) => state.formtypes)
    const [type, settype] = useState()
    const [question, setquestion] = useState([])
    const [form, setform] = useState()

    
    useEffect(() => {
        dispatch(getFormtypes())
        dispatch(getAllQuestions())
        setform({idshelter: shelterid.shelterId,type:Number(type), questions: question})
    }, [type,question]) 
    
    useEffect(()=> {
        if(type){dispatch(getFormByShelter(shelterid.shelterId,Number(type)))}
        setquestion([])
    },[type])

    const handleClick = ()=>{
        navigate('/dashboard')
    }

    let titleFormType = type ? formtypes.find(e => Number(e.id) === Number(type)).typeName : 'No seleccionado'
    let questionexistingform = existingform.length ? existingform[0].questions.map(e => e.id) : []
    
    const handleSubmitChange = (e) => {
           if(e.target[e.target.value].attributes.name.nodeValue === formtypes[1].typeName){
                settype(e.target.value)
                
            }if(e.target[e.target.value].attributes.name.nodeValue === formtypes[0].typeName){
                settype(e.target.value)
            }
            dispatch(getFormByShelter(shelterid.shelterId,Number(type)))        
    }

    const handleSubmitQuestion = (e) => {
        if(question.length === 0)setquestion([...question,Number(e.target.value)])
        else {
            let temp = question.filter(f => Number(f) === Number(e.target.value))
            if(temp.length === 0) setquestion([...question, Number(e.target.value)])
        }
        setform({idshelter: shelterid.shelterId,type:Number(type), questions: question})
    }

    const handleClickDelete = (e) => {
        if(typeof(e) !== 'number') setquestion([])
        else{
            let temp2 = question.filter(f => f !== e)
            setquestion(temp2)
        }
    }

    const handleSubmitFormCreated = () => {
        if(!type || question.length === 0 || existingform.length){
            Swal.fire('Hey!','Deben llenarse los campos', 'info');
        }else{
            dispatch(postCreateForm(form))
            setquestion([])
            Swal.fire('Ok!','Creado con exito', 'success');
        } 
    }

    const handleClickShow = () => {
        if(type && existingform.length)setquestion(questionexistingform)
        else setquestion([])
    }

    const handleClickEdit = () => {
        if(form.type && form.questions.length){
            dispatch(editForm(Number(existingform[0].id),Number(form.type),{questions : form.questions}))
        }
        Swal.fire('Ok!','Editado con exito', 'success');
    }

    return (
        <StyledDashboardForms>
            
            <StyleButtonBack onClick={handleClick}>{'Regresar'}</StyleButtonBack>
            <h1>{existingform.length ? 'Edita formulario': 'Crea formulario'}</h1>
            <div>
                <Right>
                <div>
                    <select name='type' onChange={(e) => handleSubmitChange(e)}>
                        <option disabled selected>
                            Tipo formulario
                        </option>
                        {typeof(formtypes) !== 'string' ? formtypes.map(e => (
                            <option key={e.id} value={e.id} name={e.typeName}>{e.typeName}</option>
                        )):'Cargando'}
                    </select>
                     
                    <select onChange={(e) => handleSubmitQuestion(e)}>
                        <option disabled selected>
                            Preguntas
                        </option>
                        {questions ? questions.map(e => (
                            <option key={e.id} value={e.id}>{e.question}</option>
                        )):'No cargó preguntas'}
                    </select>
                    <br></br>
                   
                    {question.length > 0 ? <StyleButtonMini onClick={(e) => handleClickDelete(e)} value='all'> Limpiar</StyleButtonMini>: ""}  
                  
                  
                    <StyleButtonMini onClick={() => handleClickShow()}>Mostrar</StyleButtonMini> 
                   
                    
                    {existingform.length ? <StyleButtonMini onClick={() => handleClickEdit()}>Editar</StyleButtonMini> : <StyleButtonMini onClick={() => handleSubmitFormCreated()}>Crear</StyleButtonMini>}   
                </div>
                </Right>
                <br></br>
                <br></br> 
                <div>
                    {<h2>{titleFormType}</h2>}
                    <table>
                        <tr>
                            <th>#</th>
                            <th>Pregunta</th>
                            <th>Acción</th>
                        </tr>
                        <tbody>
                            { question.length > 0? question.map(e => (
                                <tr key={e}>
                                    <td>{questions.filter(q => q.id === Number(e))[0].id}</td>
                                    <td>{questions.filter(q => q.id === Number(e))[0].question}</td>
                                    <td><StyleButtonRejected onClick={() => handleClickDelete(e)}><i class="fas fa-trash"></i></StyleButtonRejected></td>
                                </tr>
                            )): null}
                        </tbody>
                    </table>
                </div>
            
            </div>
           
        </StyledDashboardForms>
    )
}