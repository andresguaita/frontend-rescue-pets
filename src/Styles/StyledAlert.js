import styled from "styled-components";
import allColors from "../variables/Colors";
import Img from "../Icos/wave2.svg"

export const Table = styled.table`

border-radius: 3px ;

border-spacing: 0;

align: center
 
border-collapse: collapse;

overflow-x:auto;
border-spacing:0px; 
border-collapse: collapse;
    width: 80%;
    border-radius: 15px;
    overflow: hidden;





th,
td {
border: 1px solid  white;
text-align: center;
padding: 8px;

font-size: 10px;

overflow-x:auto;

}

th {
background-color: #63ac44;
color: #ffffff;
margin: center

}

td {
 
background-color: #ddf4ff;
}

h1{
    text-align: center;
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
font-size: 28px;
}
`