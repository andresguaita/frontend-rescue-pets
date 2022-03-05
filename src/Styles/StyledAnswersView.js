import styled from "styled-components";
import allColors from "../variables/Colors";

export const StyledAnswersView = styled.div`
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 150px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 1rem;
    background-color: rgba(204, 194, 234, 0.6);
    border-radius: 20px;
    
    div{
      margin-right: 50px;
      margin-left: 50px;
      border-radius: 20px;
      text-align: center;
      font-size: 20px;
      background-color: rgba(97, 93, 108,0.6);
      color: rgba(255,255,255,0.9);
      box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3);
    }

    h2{
      font-size: 22px;
      font-weight: bold;
    }
    h3{
      font-size: 18px;
      color: black;
    }
  `;