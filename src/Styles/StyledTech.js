import styled from "styled-components";
import allColors from "../variables/Colors";
import Img from "../Icos/homeim2.svg"

export const DivContainer = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-image: url(${Img});
  background-repeat: no-repeat;
  background-size: cover;
  
  background-position: 20% 100% ;
  h2{
  color: ${allColors.colors[8]};
}

  .text-center {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 2rem;
  }



  .formulario {
    width: 50rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .inputForm {
    width: 100%;
    height: 50px;
    background: #ddf4ff !important;
    color: gray !important;
    padding-left: 5px !important;
    margin-left: 10px !important;
    border-top: 0px !important;
    border-left: 0px !important;
    border-right: 0px !important;
    border-color:${allColors.colors[8]} !important;
    border-width: 3px !important;
    border-radius: 5px !important;
    cursor: pointer;

}


textarea{
    background: #ddf4ff !important;
    color: gray !important;
    padding-left: 5px !important;
    margin-left: 10px !important;
    border-top: 0px !important;
    border-left: 0px !important;
    border-right: 0px !important;
    border-color: ${allColors.colors[8]} !important;
    border-width: 3px !important;
    border-radius: 5px !important;
    cursor: pointer;
}

select{
  width: 100%;
    height: 50px;
    background: #ddf4ff !important;
    color: gray !important;
    padding-left: 5px !important;
    margin-left: 10px !important;
    border-top: 0px !important;
    border-left: 0px !important;
    border-right: 0px !important;
    border-color: ${allColors.colors[8]}  !important;
    border-width: 3px !important;
    border-radius: 5px !important;
    cursor: pointer;
}


    fieldset {
      background-color: white;
      padding: 20px;
      margin-bottom: 2rem;
      min-width: 120%;
      border: none;
      border-radius: 10px;
      box-shadow: 0 0 15px #ddd;
      legend {
        background-color: ${allColors.colors[3]};
        width: 100%;
        text-align: center;
        color: #fff;
        text-transform: uppercase;
        font-weight: 900;
        padding: 1rem;
        margin-bottom: 2rem;
        border-radius: 4px;
        
      }
    }
    .campo {
      display: flex;
      margin-bottom: 2rem;
      align-items: center;
      label {
        flex-basis: 7rem;
        margin-left: 1rem;
      }
      .file{
        display: flex;
        flex-direction: column;
      }
    }
    .campo input:not([type="radio"]),
    .campo textarea,
    .campo select {
      flex: 1;
    
      padding: 1rem;
    }
  }
`;

export const StyledButton = styled.button`
  background-color: ${allColors.colors[3]};
  display: block;
  color: #fff;
  text-transform: uppercase;
  font-weight: 900;
  padding: 1rem;
  transition: background-color 0.3s ease-out;
  text-align: center;
  border: none;
  width: 80%;
  margin-top: 2rem;

:hover {
  background-color: ${allColors.colors[2]};
  cursor: pointer;
}
`