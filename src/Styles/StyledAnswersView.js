import styled from "styled-components";
import allColors from "../variables/Colors";

export const StyledAnswersView = styled.div`
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 150px;
    margin-bottom: 150px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 1rem;
    background-color: rgba(204, 194, 234, 0.6);
    border-radius: 20px;
    
    div{
      border-radius: 20px;
      text-align: center;
      font-size: 20px;
      background-color: rgba(97, 93, 108,0.6);
      color: rgba(255,255,255,0.9);
    
    }

    h2{
      font-size: 22px;
    }
    h3{
      font-size: 18px;
    }
  `;