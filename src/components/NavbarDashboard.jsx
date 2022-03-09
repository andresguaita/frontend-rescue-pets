import React, {Fragment} from "react";
import { useDispatch , useSelector} from "react-redux";
// import Colors from "../variables/Corlos"
import { NavLink } from 'react-router-dom';
import { startLogout } from "../Redux/Actions";
import { Button } from "../Styles/StyledLogin";
import {StyleNavBar, StyleLi , Divmenu } from '../Styles/StyledNav';
import { StyleInput} from '../Styles/StyledSearch'
import Search from './Search';
import Logo from "../Icos/Logo2.png";

export default function NavbarDashboard() {

    const dispatch=  useDispatch()

    let {shelterDetail} = useSelector(state => state)
    const handleLogout= () =>{
        dispatch(startLogout())
       
    }

    return (
        <div>
            <header>
              
                    <StyleNavBar>
                        <ul>
                        <Divmenu>
                            <StyleLi>
                            <NavLink activeclassname="active" to="/" >Al sitio</ NavLink>
                            </StyleLi>
                            <StyleLi>
                                <NavLink activeclassname="active" to="dashboard/profile">Perfil</NavLink>
                            </StyleLi>
                            <StyleLi>
                                <Button onClick={handleLogout}>Salir</Button>
                            </StyleLi>
                            
                            </Divmenu> 
                            </ul>
                            <h1>{shelterDetail.name}</h1>
                            <img src={Logo} className="logo"></img>
                    </StyleNavBar>
                
            </header>
        </div>
    );
}