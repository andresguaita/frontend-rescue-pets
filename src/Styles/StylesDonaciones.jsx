import styled from "styled-components"
import allColors from "../variables/Colors"

export const StyledDonacion = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin-top: 20px;

p{
    color: black;
    margin-bottom: 7px;
};

label{
    font-size: 15px;
    font-weight: bold;
};
input{
    margin: 8px;
    text-align: center;
    font-size: 15px;
    border:none;
    border-bottom: 3px solid ${allColors.colors[1]};
    background: none;
    outline: none; 
}

.cho-container{
    font-size: 20px;
    margin-bottom: 20px;
}
`