import styled from "styled-components";
import allColors from "../variables/Colors";

export const StyledDashboardPetAdmin = styled.div`

    margin-top: 150px;
    margin-left: 50px;
    margin-right: 50px;


    table {
        margin-bottom: 50px;
        border-collapse: collapse;
        width: 100%;
        border-radius: 15px;
        overflow: hidden;
      }
      
      th,
      td {
        border: 1px solid #ffffff;
        text-align: center;
        padding: 8px;
        font-size: 18px;
      }
      
      th {
        background-color: ${allColors.colors[1]};
        color: rgba(255,255,255,0.8);
      }
      
      td {
        background-color: rgba(204, 194, 234, 0.6);
        height: 50px;
      }
  `;

export const StyledSelectForDashboardPetAdmin = styled.select`
    font-size: 20px;
    border-radius: 10px;
    &:hover{
      background-color : ${allColors.colors[2]};
      color: rgba(255,255,255,0.8);
    }
`  

export const StyledDivFlexAdmin = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
    input[type="checkbox"]{
      appearance: none;
      -webkit-appearance: none;
      height: 25px;
      width: 25px;
      border-radius: 5px;
      background: #f3f3f3;
      cursor: pointer;
    }

    input[type="checkbox"]:after{
      content: "✔";
      font-size:20px;
      height: 25px;
      width: 25px;
      background: ${allColors.colors[8]};
      color: #f3f3f3;
      border-radius: 5px;
      text-align: center;
      display: none;
      align-items: center;
      position:absolute;
    }
    
    input[type="checkbox"]:checked:after{
      display: grid;
      outline: none;
    }

    label{
      font-size: 18px;
      margin-left: 5px;
    }
`  

export const StyledSelectForTable = styled.select`
    font-size: 18px;
    border-radius: 10px;
    background-color : ${allColors.colors[1]};
    color: rgba(255,255,255,0.8);
    &:hover{
    background-color : ${allColors.colors[8]};
    color: rgba(255,255,255,0.8);
    }
`

export const StyledButtonDeleteAdminPet = styled.button`
    margin: 5px;
    padding: 5px;
    width: 35px;
    font-size: 20px;
    border-radius: 8px;
    border-style: none;
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3);
    background: ${allColors.colors[1]};
    color: white;
    cursor: pointer;
    &:hover {
    background-color: ${allColors.colors[2]};
    }
`

export const StyledButtonEditAdminPet = styled.button`
    margin: 5px;
    padding: 5px;
    width: 45px;
    font-size: 20px;
    border-radius: 8px;
    border-style: none;
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3);
    background: ${allColors.colors[8]};
    color: white;
    cursor: pointer;
    &:hover {
    background-color: ${allColors.colors[2]};
    }
`

export const StyledInputSearch = styled.input`
    border-radius: 10px;
    font-size: 20px;

`

export const StyledInputButton = styled.input`
  margin-right: 10px;
  margin-left: 10px; 
  padding: 3px;
  width: 75px;
  font-size: 20px;
  border-radius: 8px;
  border-style: none;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3);
  background: ${allColors.colors[8]};
  color: white;
  cursor: pointer;
  &:hover {
  background-color: ${allColors.colors[2]};
  }
`

export const StyledInputCheck = styled.input`
    
`