import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { getIdFromShelterAndCity } from '../Redux/Actions'
import { Container, Left, LeftMini, Right, button1 } from '../Styles/StyledDashboard.js';

import LogoRefugio from "../Icos/pets.png";
import DashboardIcos from './DashboardIcos'
import CreatePets from './CreatePets'
// import ShelterProfile from '/ShelterProfile'

export const Dashboard = () => {
    let modaldashboard = useSelector((state) => state.modaldashboard);

    const idUser = useSelector(state => state.id)

    console.log(idUser , "id user")

const ShelterAndCityINfo = useSelector(state => state.ShelterAndCityId)
//   console.log("ShelterAndCityINfo------------>",ShelterAndCityINfo)
  
  const shelterId = ShelterAndCityINfo.shelterId
//   console.log("shelterId------------>",shelterId)

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getIdFromShelterAndCity(idUser))
    }, [])


    return (


        <Fragment>
            <br />
            <Container>
                <Left>
                    <img src={LogoRefugio} className="icos20" />
                    {/* <Link to='/dashboard/pets/FollowUpTransit'> <LeftMini>Seguimiento a Tránsitos</LeftMini> </Link> */}
                    {/* <Link to='/dashboard/forms'><LeftMini> Go to Answers Forms</LeftMini> </Link>
                    <Link to='/dashboard/createForm'><LeftMini>  Go to create Forms</LeftMini> </Link> */}

                     {/* <Link to="/dashboard/DashStatisChelter" ><LeftMini>Estadísticas</LeftMini></Link> */}
                     {/* <Link to="/dashboard/help" ><LeftMini>Soporte Técnico</LeftMini></Link> */}
                     <Link to="/dashboard/Alert" ><LeftMini>Mis Alertas</LeftMini></Link>

                </Left>

                {modaldashboard === "CreatePets" ? <CreatePets></CreatePets> : ""}
                <Right>


                    <DashboardIcos  refugio={shelterId}></DashboardIcos>
                </Right>
            </Container>

        </Fragment>
    )

}

// export const Center = styled.div `
// position: relative;
// min-height: calc(100vh - 170px);
// display: grid;
// `

// export const Container = styled.button`
// position: relative;
// align-self: center;
// justify-self: center;
// font-size: 14px;
// `
