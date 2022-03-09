import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {setFormStatus ,addFollowUp, getIndividualForm, getProfile, sendEmailAccepted, sendEmailRejected, deleteFollowUp, checkForm, updatePetStatus, addFollowUpTransit} from "../Redux/Actions/index"
import {  StyledAnswersView } from '../Styles/StyledAnswersView.js'
import {StyleButtonAccepted, StyleButtonBack, StyleButtonRejected} from '../Styles/StyledButtons.js';

export const AnswerFormView = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {adoYreqid,formtypeid,petId,formId} = useParams()
    const cityandshelter = useSelector((state) => state.ShelterAndCityId)
    const detailform = useSelector((state) => state.individualform)
    const shelterid = cityandshelter.shelterId
    const checkf = useSelector((state) => state.checkForm)
    const profile = useSelector((state) => state.profileForSend)
    const formByChangeStatus = useSelector((state) => state.form)
    let idform = formByChangeStatus ? formByChangeStatus.find(e => e.id === adoYreqid).adoYreqid : null

    useEffect(()=>{
        dispatch(checkForm(shelterid))
        dispatch(getIndividualForm(shelterid,formtypeid,adoYreqid))
        // dispatch(getProfile())
    },[])

    useEffect(()=>{
        if(detailform.length){dispatch(getProfile(detailform[0]))}
    },[dispatch,detailform])

    const handleClick = ()=>{
        navigate('/dashboard/forms')
    }

    const handleAllow = () => {
        Swal.fire('Ok!','Peticion Aceptada', 'success');
        if(Number(formtypeid) === 2){
            dispatch(addFollowUp({
                followUpStatusId:1,
                profileId:Number(detailform[0]),
                shelterId:shelterid,
                petId:Number(formtypeid) === 2 ? Number(petId) : null,
                adoptionId:Number(formtypeid) === 2 ? Number(adoYreqid) : null,
                requestId:Number(formtypeid) === 1 ? Number(adoYreqid) : null,
                userId : profile.userId
            }))
        }
        if(Number(formtypeid) === 1){
            dispatch(addFollowUpTransit({
                profileId:Number(detailform[0]),
                shelterId:shelterid,
                requestId:Number(formtypeid) === 1 ? Number(adoYreqid) : null,
                userId : profile.userId
            }))
        }    
        dispatch(setFormStatus(true,Number(formId),Number(adoYreqid)))
        dispatch(sendEmailAccepted({email:profile.user.email,type:Number(formtypeid)}))
        if(petId){dispatch(updatePetStatus(petId, {petStatusId: 2}))}      
    }

    const handleDeny = () => {
        Swal.fire('Ups!','Peticion Denegada', 'error');
        dispatch(setFormStatus(false,Number(formId),Number(adoYreqid)))
        dispatch(sendEmailRejected({email:profile.user.email,type:Number(formtypeid)}))
    }

    return (<StyledAnswersView>
    
    <StyleButtonBack onClick={handleClick}>{"<"}</StyleButtonBack>
    
    {profile.id? <div>
        <h2>{profile ? profile.name+' '+profile.lastName : 'Cargando...'}</h2><br></br>
        <h3>Celular: {profile ? profile.phoneNumber: 'Cargando...'}</h3>
        <p>Email: {profile ? profile.user.email: 'Cargando...'}</p>
    </div> : <p>Cargando...</p>}
       
        
    <hr></hr>
    {detailform.length ? detailform[1].map(e => (
        <div key={e.answer}>
            <h2>{e.question}</h2>
            <h3>: {e.answer}</h3>
        </div>
    )): <h1>Loading..</h1>}
    <StyleButtonAccepted onClick={handleAllow}><i class="fas fa-check"></i></StyleButtonAccepted>
    <StyleButtonRejected onClick={handleDeny}><i class="fas fa-trash"></i></StyleButtonRejected>
    </StyledAnswersView>
    )
}