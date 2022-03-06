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
  

  button{
    width: 60px;
    font-size: 20px;
  }

  select{
    font-size: 25px;
    width: 200px;
  }
  
  table {
    border-collapse: collapse;
    width: 100%;
  }
  
  th,
  td {
    border: 1px solid #ffffff;
    text-align: left;
    padding: 8px;
    font-size: 22px;
  }
  
  th {
    background-color: rgb(117, 201, 250);
  }
  
  td {
    background-color: rgb(205, 235, 253);
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