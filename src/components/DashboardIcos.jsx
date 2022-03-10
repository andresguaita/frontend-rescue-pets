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
            <Link to="/dashboard/DashStatisChelter">
                {" "}
                <button className="but">
                    {" "}
                    <img src={Statistics} style={{marginTop:"1rem"}}></img>
                    <br/>
                    <h2 style={{marginTop:"1rem"}}>Estadísticas</h2>
                  
                </button>
            </Link>

            <Link to={`/shelters/${refugio}`} ><button className="but" >
                <img src={Img} style={{marginTop:"1rem"}}></img>
                <br/>
                <h2 style={{marginTop:"1rem"}}>Mi Refugio</h2>
            </button></Link> 

            <button onClick={
                    (event) => handleClick(event, "CreatePets")
                }
                className="but">
                {" "}
                <img src={New} style={{marginTop:"1rem"}}></img>
                <br/>
                <h2 style={{marginTop:"1rem"}}>Nueva Mascota</h2>
                
            </button>

            <Link to="/dashboard/pets">
                <button className="but">
                    {" "}
                    <img src={Img2} style={{marginTop:"1rem"}}></img>
                    <br/>
                    <h2 style={{marginTop:"1rem"}}>Mis mascotas</h2>
                
                </button>
            </Link>

            <Link to="/dashboard/createForm">
                {" "}
                <button className="but">
                    {" "}
                    <img src={Ok} style={{marginTop:"1rem"}}></img>
                    <br/>
                    <h2 style={{marginTop:"1rem"}}>Nuevo Formulario</h2>
                    
                </button>
            </Link>
            
            <Link to="/dashboard/forms">
                <button className="but">
                    {" "}
                    <img src={Edad} style={{marginTop:"1rem"}}></img>
                    <br/>
                    <h2 style={{marginTop:"1rem"}}>Preguntas</h2>
                
                </button>
            </Link>

            <Link to="/dashboard/pets/FollowUp">
                <button className="but">
                    {" "}
                    <img src={Imglist} style={{marginTop:"1rem"}}></img>
                    <br/>
                    <h2 style={{marginTop:"1rem"}}>Seguimiento de Mascotas</h2>
                    
                </button>
            </Link>

            <Link to="/dashboard/pets/FollowUpTransit">
                {" "}
                <button className="but">
                    {" "}
                    <img src={Transit} style={{marginTop:"1rem"}}></img>
                    <br/>
                    <h2 style={{marginTop:"1rem"}}>Seguimiento a Tránsitos</h2>
                    
                </button>
            </Link>
            
            <Link to="/dashboard/help">
                {" "}
                <button className="but">
                    {" "}
                    <img src={Support} style={{marginTop:"1rem"}}></img>
                    <br/>
                    <h2 style={{marginTop:"1rem"}}>Soporte Técnico</h2>

                </button>
            </Link>

        </Fragment>
    );
}
