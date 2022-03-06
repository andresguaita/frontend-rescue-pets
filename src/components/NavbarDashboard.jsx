import React, {Fragment} from "react";
import { useDispatch } from "react-redux";
// import Colors from "../variables/Corlos"
import { NavLink } from 'react-router-dom';
import { startLogout } from "../Redux/Actions";
import { Button } from "../Styles/StyledLogin";
import {StyleNavBar, StyleLi , Divmenu } from '../Styles/StyledNav';
import { StyleInput} from '../Styles/StyledSearch'
import Search from './Search';

export default function NavbarDashboard() {

    const dispatch=  useDispatch()

    const handleLogout= () =>{
        dispatch(startLogout())
    }

    return (
        <Fragment>
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
                                <NavLink activeclassname="active" to="dashboard/config"><i className="fas fa-cog"></i></NavLink>
                            </StyleLi>
                            <StyleLi>
                                <Button onClick={handleLogout}>Salir</Button>
                            </StyleLi>
                            
                            </Divmenu> 
                            </ul>
                    </StyleNavBar>
                
            </header>
        </Fragment>
    );
}