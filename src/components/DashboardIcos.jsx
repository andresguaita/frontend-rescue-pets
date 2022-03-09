import React, {Fragment} from "react";
import Img from "../Icos/house.png";
import Img2 from "../Icos/espe.png";
import Statistics from "../Icos/statistics.png";
import Support from "../Icos/support.png";
import Transit from "../Icos/transit.png";
import Imglist from "../Icos/list.png";

import New from "../Icos/new.png";
import Edad from "../Icos/edad.png";
import Ok from "../Icos/ok.png";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
// import CreatePets from './CreatePets'
// import ShelterProfile from './ShelterProfile'
import {ModalDashboardOpen} from "../Redux/Actions/index";
export default function DashboardIcos({refugio}) {
    const dispatch = useDispatch();

    function handleClick(evento, data) {
        dispatch(ModalDashboardOpen(data));
    }

    return (
        <Fragment>
            <Link to={`/shelters/${refugio}`} ><button className="but" >
                <img src={Img}></img>
                <br/>
                Mi Refugio
            </button></Link> 
            <Link to="/dashboard/pets">
                <button className="but">
                    {" "}
                    <img src={Img2}></img>
                    <br/>
                    Mis mascotas
                </button>
            </Link>
            <button onClick={
                    (event) => handleClick(event, "CreatePets")
                }
                className="but">
                {" "}
                <img src={New}></img>
                <br/>
                Nueva Mascota
            </button>
            <Link to="/dashboard/pets/FollowUp">
                <button className="but">
                    {" "}
                    <img src={Imglist}></img>
                    <br/>
                    Seguimiento a Mascota
                </button>
            </Link>
            <Link to="/dashboard/forms">
                <button className="but">
                    {" "}
                    <img src={Edad}></img>
                    <br/>
                    Preguntas
                </button>
            </Link>
            <Link to="/dashboard/createForm">
                {" "}
                <button className="but">
                    {" "}
                    <img src={Ok}></img>
                    <br/>
                    Nuevo Formulario
                </button>
            </Link>
            <Link to="/dashboard/pets/FollowUpTransit">
                {" "}
                <button className="but">
                    {" "}
                    <img src={Transit}></img>
                    <br/>
                    Seguimiento a Tránsitos
                </button>
            </Link>
            <Link to="/dashboard/DashStatisChelter">
                {" "}
                <button className="but">
                    {" "}
                    <img src={Statistics}></img>
                    <br/>
                    Estadísticas
                </button>
            </Link>
            <Link to="/dashboard/help">
                {" "}
                <button className="but">
                    {" "}
                    <img src={Support}></img>
                    <br/>
                    Soporte Técnico
                </button>
            </Link>
        </Fragment>
    );
}
