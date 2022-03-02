import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { StyledDashboardForms } from '../Styles/StyledDashboardForms'
import { editForm, getAllQuestions, getFormByShelter, getFormtypes, postCreateForm } from '../Redux/Actions/index'
import {StyleButtonAccepted, StyleButtonBack, StyleButtonRejected, StyleButtonMini} from '../Styles/StyledButtons.js';
import { useState } from "react"

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
            alert('deben llenarse los campos')
        }else{
            dispatch(postCreateForm(form))
            setquestion([])
            alert('creado con exito')
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
        alert('editado con exito')
    }

    return (
        <StyledDashboardForms>
            <StyleButtonBack onClick={handleClick}>{'<'}</StyleButtonBack>
            <h1>{existingform.length ? 'Edita formulario': 'Crea formulario'}</h1>
            <div>
                <div>
                    <select name='type' onChange={(e) => handleSubmitChange(e)}>
                        <option disabled selected>
                            Tipo formulario
                        </option>
                        {typeof(formtypes) !== 'string' ? formtypes.map(e => (
                            <option key={e.id} value={e.id} name={e.typeName}>{e.typeName}</option>
                        )):'Cargando'}
                    </select>
                        <br></br>
                        <br></br>
                    <select onChange={(e) => handleSubmitQuestion(e)}>
                        <option disabled selected>
                            Preguntas
                        </option>
                        {questions ? questions.map(e => (
                            <option key={e.id} value={e.id}>{e.question}</option>
                        )):'No cargó preguntas'}
                    </select>
                    <br></br>
                    <br></br>
                    <StyleButtonRejected onClick={(e) => handleClickDelete(e)} value='all'> ✘</StyleButtonRejected>
                    <br></br>
                    <br></br>
                    <StyleButtonMini onClick={() => handleClickShow()}>Mostrar</StyleButtonMini> 
                    <br></br>
                    <br></br>
                    {existingform.length ? <StyleButtonAccepted onClick={() => handleClickEdit()}>Editar</StyleButtonAccepted> : <StyleButtonAccepted onClick={() => handleSubmitFormCreated()}>Crear</StyleButtonAccepted>}   
                </div>
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
                                    <td><StyleButtonRejected onClick={() => handleClickDelete(e)}>✘</StyleButtonRejected></td>
                                </tr>
                            )): null}
                        </tbody>
                    </table>
                </div>
            
            </div>
        </StyledDashboardForms>
    )
}

