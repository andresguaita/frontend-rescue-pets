import styled from "styled-components";
import allColors from "../variables/Colors";
import Img from "../Icos/homeim1.svg"

export const DivContainer = styled.div`
  //position: relative;
  font-size: 12px;
  text-align: center;
  margin-top: -80px;
  position: fixed; 
  z-index: 100;
  display: flex;
  flex-direction: column;
  // top: 14%;
  // left: 30%;
  width: 55%; 
  // height:84%; 
  // overflow: none; 
  background-color: rgba(0, 0, 0,0.7); 
  // border: 2px;
  border-radius: 1em;
  // opacity: 98%;
  // text-transform: capitalize;
  border-radius: 6.5px;
  box-shadow: 0 0 15px gray;
  // padding: 9px;
  h2{
  color: ${allColors.colors[8]};
  }

input {
    width: 50%;
    height: 25px;
    background: #ddf4ff !important;
    color: gray !important;
    padding-left: 5px !important;
    margin-left: 10px !important;
    border-top: 0px !important;
    border-left: 0px !important;
    border-right: 0px !important;
    border-color:${allColors.colors[3]} !important;
    border-width: 3px !important;
    border-radius: 5px !important;
    cursor: text;

}

select{
    width: 200px;
    height: 25px;
    background: #ddf4ff !important;
    color: gray !important;
    padding-left: 5px !important;
    margin-left: 10px !important;
    border-top: 0px !important;
    border-left: 0px !important;
    border-right: 0px !important;
    border-color: ${allColors.colors[3]}  !important;
    border-width: 3px !important;
    border-radius: 5px !important;
    
  
    cursor: pointer;
}


  .text-center {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  img{
      margin: 15px;
      border-radius: 10px;
      width: 160px;
      height: 160px;
      position: aboslute;
      left: 50rem;
      bottom: 21rem;
      object-fit: cover;
  }



  .formulario {
    width: 50rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    

textarea{
    width: 100%;
    height: 50px;
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


    
    .campo {
      display: flex;
      margin-bottom: 2rem;
      align-items: center;
      label {
        flex-basis: 7rem;
        margin-left: 1rem;
      }
      .file{
        display: flex;
        flex-direction: column;
      }
    }
    .campo input:not([type="radio"]),
    .campo textarea,
    .campo select {
      flex: 1;
      padding: 1rem;
    }
  }
`;

export const ButtonDelete = styled.button`
  position: fixed;
  margin-left: 138px;
  margin-top: 22px;
  width: 30px;
  height: 20px;
  font-size:12px;
  color: white;
  background: ${allColors.colors[1]};
  border-style: none;
  border-radius: 5px;
  &:hover{
    background: ${allColors.colors[2]};
  }
`

export const DivImages = styled.div`
  display:flex;
  width: 90%;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-left: 5%;
`



export const StyledCard = styled.div`
  height: 650px ;
  width: 485px;
  background-color: ${allColors.colors[3]};
  border-radius: 4px;
  padding-top: 1em;
  
  margin: 1%;
  transition: top ease 0.5s;
  cursor: pointer;
  text-decoration: none;
  transition: ease-in 0.3s;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 15px gray;
  background: #fff;
  text-align: center;
  text-decoration: none;
  
  align-self: start;
`;

export const StyledButton = styled.input`
  background-color: ${allColors.colors[3]};
  display: block;
  color: #fff;
  text-transform: uppercase;
  font-weight: 900;
  padding: 1rem;
  transition: background-color 0.3s ease-out;
  text-align: center;
  border: none;
  width: 70%;
  margin-top: 2rem;

:hover {
  background-color: ${allColors.colors[2]};
  cursor: pointer;
}
`
export const P1 = styled.p`
color: #ff0000;
margin-left: 55%;
margin-top: -4%;
`

export const P2 = styled.p`
color: #ff0000;
margin-left: 30%;
margin-top: -4%;
`

export const P3 = styled.p`
color: #ff0000;
margin-left: 53%;
margin-top: -4%;
`
export const P4 = styled.p`
color: #ff0000;
margin-left: 53%;
margin-top: -4%;
`
export const P5 = styled.p`
color: #ff0000;
margin-left: 53%;
margin-top: -4%;
`
export const P6 = styled.p`
color: #ff0000;
margin-left: 30%;
margin-top: -4%;
`
export const P7 = styled.p`
color: #ff0000;
margin-left: 30%;
margin-top: -4%;
`
export const P8 = styled.p`
color: #ff0000;
margin-left: 30%;
margin-top: -4%;
`
export const P9 = styled.p`
color: #ff0000;
margin-left: 30%;
margin-top: -4%;
`
export const CountImg = styled.p`
/* color: #ff0000; */
margin-left: 70%; 
margin-top: -5%;
`