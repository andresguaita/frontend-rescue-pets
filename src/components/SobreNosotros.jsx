import React from "react";
import { DivContainerNos, GridStyled, Ailen, Jean } from "../Styles/styledNosotros";
import logo4 from "../Icos/logo4.png";

function SobreNosotros() {
  return (
    <DivContainerNos>
      <h1>Nosotros</h1>

      <GridStyled>
        <div className="Left">

          <div className="contenedor">
            <Ailen />
            <h3>Ailen Martinez</h3>
          </div>

          <div className="contenedor">
            <Jean />
            <h3>Jean</h3>
          </div>

        </div>
        <div className="Right">
          <img src={logo4} alt="" />
        </div>
      </GridStyled>
    </DivContainerNos>
  );
}

export default SobreNosotros;
