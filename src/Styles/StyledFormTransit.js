import styled from "styled-components";
import allColors from "../variables/Colors";

export const DivContainer = styled.div`
  
  height: 100%;
  display: flex;
  color: ${allColors.colors[8]};
  align-items: center;
  justify-content: space-around;
  margin-top: 5px;
  padding :15px;
 
 
  h1 {
    color: ${allColors.colors[8]};
    margin-top: 0;
  }

  .formulario {
    width: 50rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .inputForm {
    width: 46rem;
    height: 40px;
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
    cursor: text;
    }

    textarea {
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

    button {
      background-color: ${allColors.colors[3]};
      display: block;
      color: #fff;
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
        
      :disabled {
  cursor: not-allowed;
}
      }

      :disabled{
      opacity: 40%;
      }
    }

    div {
      display: flex;
      flex-direction: column;
      padding: 2rem;
      align-items: center;

      label {
        padding-bottom: 1rem;
        font-size: 1.5rem;
        text-align: center;
      }
    }
    .errors{
      p{
        color: red;
      }
    }
  }
`;

export const StyledButton = styled.input`
  background-color: ${allColors.colors[3]};
  display: block;
  color: #fff;
  text-transform: uppercase;
  font-weight: 900;
  padding: 1rem;
  transition: background-color 0.3s ease-out;
  text-align: left;
  border: none;
  width: 80%;
  margin-top: 2rem;


  :hover {
    background-color: ${allColors.colors[2]};
    cursor: pointer;
  }
`;

export const Left = styled.div`
  
  width: 50%;
  border-radius: 9px;
 margin:0;
 background-color: ${allColors.colors[8]};
text-align: center;
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


export const Right = styled.div`
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
