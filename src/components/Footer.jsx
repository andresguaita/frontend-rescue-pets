import React from "react";
import {Link} from "react-router-dom";
import { StyledFooter } from "../Styles/StyledFooter.js";

export default function Footer() {
  return (
    <StyledFooter>
      <div className="flex-footer contenedor">
        <div>
          <h3 className="titleFooter">Refugios</h3>
          <nav className="footer-menu">
            <Link to='/refugios'>Ver listado de Refugios</Link>
            <Link to='donaciones'>Donar</Link>
            <Link to='/formAlerta'>Enviá una alerta</Link>
          </nav>
        </div>
        <div>
          <h3 className="titleFooter">Sobre Nosotros</h3>
          <nav className="footer-menu">
            <Link to='/historia'>Nuestra Historia</Link>
            <Link to='/mision'>Misión, Visión y Valores</Link>
            <Link to='/PolyPrivacidad'>Politica y Provacidad</Link>
            <Link to='/terminos'>Terminos del Servicio</Link>
          </nav>
        </div>
        <div>
          <h3 className="titleFooter">Soporte</h3>
          <nav className="footer-menu">
            <Link to='/FAQs'>Preguntas frecuentes</Link>
            <Link to='/help'>Ayuda en Línea</Link>
            <Link to='/CyS'>Confianza y Seguridad</Link>
          </nav>
        </div>
      </div>
      <p className="copyright">@Todos los derechos reservados - RescuePets</p>
    </StyledFooter>
  );
}
