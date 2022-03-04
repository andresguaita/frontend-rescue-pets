import styled from "styled-components";
import allColors from "../variables/Colors";

export const StyledDashboardForms = styled.div`


height: 100%;
  display: flex;
  color: ${allColors.colors[8]};
  align-items: center;
  justify-content: space-around;
  margin-top: 6%;
  padding :40px;
  

  select{
    font-size: 25px;
    width: 200px;
    border-radius: 10px;
    margin: 10px;
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
    border: 1px solid ${allColors.colors[3]};
    text-align: center;
    padding: 8px;
    font-size: 20px;
  }
  
  th {
    background-color: ${allColors.colors[3]};
    color: rgba(255,255,255,0.8);
  }
  
  td {
    background-color: rgba(204, 194, 234, 0.6);
    height: 250px;
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

  
export const Right = styled.div`
  
width: 50%;
border-radius: 9px;
margin:0;
background-color: ${allColors.colors[8]};
border-radius: 12px;
border-radius: 12px;
padding: 20px;
color: white;
h1 {
  color: white;
 
}

`;


export const Centro = styled.div`

width: 100%;
border-radius: 9px;
margin:0;
text-align: center;
font-size: 13px;
border-radius: 12px;
border-radius: 12px;
color: ${allColors.colors[8]};
h1 {
  color: ${allColors.colors[2]};
 
}

`;


export const Left = styled.div`
background-color: white;

width: 50%;
padding: 18px;
margin:19px;

h2 {
  color: ${allColors.colors[8]};
  font-size: 18px !important;
}
span {
  color: ${allColors.colors[2]};
  font-size: 13px !important;
  
}

h1 {
  color: ${allColors.colors[2]};
  font-size: 15px !important;
  text-align: center;
 
}
h3 {
  text-align: center;
  color: ${allColors.colors[3]};
  font-size: 33px !important;
}

p{
font-size : 15px;


}

`;



