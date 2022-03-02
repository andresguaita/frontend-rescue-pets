import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {addFollowUp, getIndividualForm, getProfile, sendEmailAccepted, sendEmailRejected} from "../Redux/Actions/index"
import { StyledDashboardForms } from '../Styles/StyledDashboardForms'
import {StyleButtonAccepted, StyleButtonBack, StyleButtonRejected} from '../Styles/StyledButtons.js';

export const AnswerFormView = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {formid,formtypeid,petId} = useParams()
    const cityandshelter = useSelector((state) => state.ShelterAndCityId)
    const detailform = useSelector((state) => state.individualform)
    const shelterid = cityandshelter.shelterId
    const checkf = useSelector((state) => state.checkForm)
    const profile = useSelector((state) => state.profileForSend)

    useEffect(()=>{
        dispatch(getIndividualForm(shelterid,formtypeid,formid))
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
            adoptionId:Number(formtypeid) === 2 ? Number(formid) : null,
            requestId:Number(formtypeid) === 1 ? Number(formid) : null,
            userId : profile.userId
        }))
            
        dispatch(sendEmailAccepted({email:profile.user.email,type:Number(formtypeid)}))         
    }

    const handleDeny = () => {
        alert('Petición denegada')
        dispatch(sendEmailRejected({email:profile.user.email,type:Number(formtypeid)}))
    }

    return (<StyledDashboardForms>
    
    <StyleButtonBack onClick={handleClick}>{"<"}</StyleButtonBack>
    
    {detailform.length ? detailform[1].map(e => (
        <div key={e.answer}>
            <h2>{e.question}</h2>
            <h3>{e.answer}</h3>
            <hr></hr>
        </div>
    )): <h1>Loading..</h1>}
    <StyleButtonAccepted onClick={handleAllow}> ✔</StyleButtonAccepted>
    <StyleButtonRejected onClick={handleDeny}> ✘</StyleButtonRejected>
    </StyledDashboardForms>
    )
}