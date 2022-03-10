import React, { Fragment } from "react";
// import Colors from "../variables/Corlos"
import { NavLink } from "react-router-dom";
import { StyleNavBar, StyleLi, Divmenu } from "../Styles/StyledNav";
import { StyleInput } from "../Styles/StyledSearch";
import Search from "./Search";
import Logo2 from "../Icos/Logo2.png";

export default function Navbar() {
  return (
    <div style={{ backgroundColor: "#6F8AB7" }}>
      <header>
        <StyleNavBar>
          <Divmenu>
            <StyleLi>
              <NavLink activeclassname="active" to="/">
                Inicio
              </NavLink>
            </StyleLi>
            <StyleLi>
              <NavLink activeclassname="active" to="/Login">
                Soy Un Refugio
              </NavLink>
            </StyleLi>
            <StyleLi>
              <NavLink activeclassname="active" to="/favorites">
                Mascotas Favoritas
              </NavLink>
            </StyleLi>
            <StyleLi>
              <NavLink activeclassname="active" to="/nosotros">
                Sobre Nosotros
              </NavLink>
            </StyleLi>
            {/* <StyleInput name='Search' placeholder='Escriba elemento a buscar'></StyleInput> */}
            <Search />
          </Divmenu>

          <img src={Logo2} className="logo"></img>
        </StyleNavBar>
      </header>
    </div>
  );
}
