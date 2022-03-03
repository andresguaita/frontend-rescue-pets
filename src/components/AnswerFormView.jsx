import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {setFormStatus ,addFollowUp, getIndividualForm, getProfile, sendEmailAccepted, sendEmailRejected, deleteFollowUp, checkForm} from "../Redux/Actions/index"
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
        console.log(detailform[0])
    },[])

    useEffect(()=>{
        if(detailform.length){dispatch(getProfile(detailform[0]))}
    },[dispatch,detailform])

    const handleClick = ()=>{
        navigate('/dashboard/forms')
    }

    const handleAllow = () => {
        alert('Petición aceptada')
        dispatch(addFollowUp({
            followUpStatusId:1,
            profileId:Number(detailform[0]),
            shelterId:shelterid,
            petId:Number(formtypeid) === 2 ? Number(petId) : null,
            adoptionId:Number(formtypeid) === 2 ? Number(adoYreqid) : null,
            requestId:Number(formtypeid) === 1 ? Number(adoYreqid) : null,
            userId : profile.userId
        }))
        dispatch(setFormStatus(true,Number(formId),Number(adoYreqid)))
        dispatch(sendEmailAccepted({email:profile.user.email,type:Number(formtypeid)}))         
    }

    const handleDeny = () => {
        alert('Petición denegada')
        let temp = checkf.filter(e => Number(e.adoptionId) === Number(adoYreqid))
        dispatch(deleteFollowUp(temp[0].id))
        dispatch(setFormStatus(false,Number(formId),Number(adoYreqid)))
        dispatch(sendEmailRejected({email:profile.user.email,type:Number(formtypeid)}))
    }

    return (<StyledAnswersView>
    
    <StyleButtonBack onClick={handleClick}>{"<"}</StyleButtonBack>
    
    {detailform.length ? detailform[1].map(e => (
        <div key={e.answer}>
            <h2>{e.question}</h2>
            <h3>: {e.answer}</h3>
        </div>
    )): <h1>Loading..</h1>}
    <StyleButtonAccepted onClick={handleAllow}> ✔</StyleButtonAccepted>
    <StyleButtonRejected onClick={handleDeny}> ✘</StyleButtonRejected>
    </StyledAnswersView>
    )
}