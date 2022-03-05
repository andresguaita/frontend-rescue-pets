import React from 'react'
import {Center, CenterChild} from '../Styles/StyledFollowUpTransit'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect, useState, Fragment } from 'react'
import { getFollowUpTransits } from '../Redux/Actions'

const FollowUpTransit = () => {

    const ShelterAndCityINfo = useSelector(state => state.ShelterAndCityId)
    console.log("ShelterAndCityINfo------------>",ShelterAndCityINfo)
    
    const shelterId = ShelterAndCityINfo.shelterId
    console.log("shelterId------------>",shelterId)
  
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFollowUpTransits(shelterId))
      }, [dispatch])


    const allFollowUpTransits = useSelector(state => state.followUpTransits)
    console.log("allFollowUpTransits---------------------->", allFollowUpTransits)


    return (
        <Center>
            <CenterChild>FollowUpTransit</CenterChild>
        </Center>
    )
}

export default FollowUpTransit