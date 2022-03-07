import styled from "styled-components";
import allColors from "../variables/Colors";

export const StyledDashboardPetAdmin = styled.div`
    margin-bottom: 250px;
    margin-top: 50px;
    margin-left:50px;
    a{
      text-decoration: none;
      color: white;
    }

    .contentImages{
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      flex-wrap: wrap;
    }
    .imagesEdit{
      margin: 10px;
      width: 200px;
      height: 200px;
      background: #f3f3f3;
      border-radius: 15px;
    }

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
        color: rgb(80,80,80);
        font-weight: bold;
      }
      
      th {
        background-color: ${allColors.colors[1]};
        color: rgba(255,255,255,0.8);
      }
      
      td {
        background-color: rgba(204, 194, 234, 0.6);
        height: 50px;
        
      }
      .paginado{
        display: flex ;
        align-items: baseline;
        justify-content: space-evenly ;
        margin-bottom: 2rem ;
        
        select{
          width: 100px ;
          height: 20px ;
          text-align: center ;
        }
      }
  `;

  export const StyledDashboardPetModal = styled.div`
      position: fixed;
      z-index: 2;
      background: rgba(0,0,0,0.5);
      backdrop-filter: blur(2px);
      left:0px;
      right:0px;
      top:0px;
      padding-top:20%;
      width:100%;
      height:100%;
  `  

export const StyledSelectForDashboardPetAdmin = styled.select`
    font-size: 20px;
    border-radius: 10px;
    &:hover{
      background-color : ${allColors.colors[2]};
      color: rgba(255,255,255,0.8);
    }
`  

export const StyledSelectForDashboardPetEditAdmin = styled.select`
    font-size: 20px;
    border-radius: 10px;
    width: 200px;
    margin-bottom: 30px;
    &:hover{
      background-color : ${allColors.colors[2]};
      color: rgba(255,255,255,0.8);
    }
` 

export const StyledInputForDashboardPetEditAdmin = styled.input`
    border-radius: 10px;
    font-size: 20px;
    width: 200px;
    margin-bottom: 30px;
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

export const StyledDivFlexColumnAdmin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    margin: 10px;
    border-radius: 20px;
    text-align: center;
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
    font-weight: bold;
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
    width: 40px;
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

export const StyledButtonSearch = styled.button`
    position: relative;
    width: 80px;
    margin: 5px;
    margin-left: 20px;
    margin-right: 20px;
    font-size: 20px;
    border-radius: 8px;
    border-style: none;
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3);
    background: ${allColors.colors[8]};
    color: white;
    display: flex;
    justify-content: space-around;
    cursor: pointer;
    &:hover {
    background-color: ${allColors.colors[2]};
    }
    img{
      margin-top: 8px;
      margin-left: 4px;
      width: 17px;
      height: 17px;
    }
`

export const AlertPopUp = styled.button`
    background: rgb(240,36,89);
    color: white;
    border-radius: 20px;
    font-size: 80px;
    border-style: none;
    height: 150px;
    width: 150px;
`