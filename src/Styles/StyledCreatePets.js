import styled from "styled-components";
import allColors from "../variables/Colors";
import Img from "../Icos/homeim1.svg"

export const DivContainer = styled.div`
  //position: relative;
  
  text-align: center;
  margin: 2px;

  position: fixed; 
  z-index: 100; 
  top: 14%;
  left: 30%;
  width: 40%; 
  height:84%; 
  overflow: none; 
  background-color: rgb(255, 255, 255); 
  border: 2px;
  border-radius: 1em;
  opacity: 98%;
  text-transform: capitalize;
  border-radius: 6.5px;
  box-shadow: 0 0 15px gray;
  padding: 9px;
  h2{
  color: ${allColors.colors[8]};
}

input {
  width: 60%;
    height: 22px;
    background: #ddf4ff !important;
    color: gray !important;
    padding-left: 5px !important;
    margin-left: 10px !important;
    border-top: 0px !important;
    border-left: 0px !important;
    border-right: 0px !important;
    border-color:${allColors.colors[3]} !important;
    border-width: 3px !important;
    border-radius: 5px !important;
    cursor: text;

}

select{
  width: 60%;
    height: 22px;
    background: #ddf4ff !important;
    color: gray !important;
    padding-left: 5px !important;
    margin-left: 10px !important;
    border-top: 0px !important;
    border-left: 0px !important;
    border-right: 0px !important;
    border-color: ${allColors.colors[3]}  !important;
    border-width: 3px !important;
    border-radius: 5px !important;
    
  
    cursor: pointer;
}


  .text-center {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  img{
      width: 35rem;
      height: auto;
      position: relative;
      left: 50rem;
      bottom: 21rem;
  }



  .formulario {
    width: 50rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    

textarea{
  width: 100%;
    height: 50px;
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




export const StyledCard = styled.div`
  height: 650px ;
  width: 485px;
  background-color: ${allColors.colors[3]};
  border-radius: 4px;
  padding-top: 1em;
  
  margin: 1%;
  transition: top ease 0.5s;
  cursor: pointer;
  text-decoration: none;
  transition: ease-in 0.3s;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 15px gray;
  background: #fff;
  text-align: center;
  text-decoration: none;
  
  align-self: start;
`;

export const StyledButton = styled.input`
  background-color: ${allColors.colors[3]};
  display: block;
  color: #fff;
  text-transform: uppercase;
  font-weight: 900;
  padding: 1rem;
  transition: background-color 0.3s ease-out;
  text-align: center;
  border: none;
  width: 70%;
  margin-top: 2rem;

:hover {
  background-color: ${allColors.colors[2]};
  cursor: pointer;
}
`
