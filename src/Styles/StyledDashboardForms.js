import styled from "styled-components";
import allColors from "../variables/Colors";

export const StyledDashboardForms = styled.div`


    margin-left: 50px;
    margin-right: 50px;
    margin-top: 150px;
    margin-bottom: 150px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 1rem;
  

  select{
    font-size: 25px;
    width: 200px;
    border-radius: 10px;
    &:hover{
      background-color : ${allColors.colors[2]};
      color: rgba(255,255,255,0.8);
    }
  }
  
  table {
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
    font-size: 20px;
  }
  
  th {
    background-color: ${allColors.colors[1]};
    color: rgba(255,255,255,0.8);
  }
  
  td {
    background-color: rgba(204, 194, 234, 0.6);
  }
  
  form {
    display: flex;
    gap: 5px;
  }
  
  form td:last-child {
    display: flex;
    justify-content: space-evenly;
  }
  
  form * {
    font-size: 18px;
  }
  `;