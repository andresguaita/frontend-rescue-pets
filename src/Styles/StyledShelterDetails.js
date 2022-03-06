import styled from "styled-components";
import allColors from "../variables/Colors";
import {Link} from "react-router-dom";
import Img from "../Icos/wave2.svg"
export const StyledDiv = styled.div `
  margin-top: 5.1rem;
`;
export const StyledNav = styled.div `
  background-color: ${
    allColors.colors[0]
};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  font-size: 2rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 3rem;
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    color: ${
    allColors.colors[1]
};
    font-weight: 700;
  }
`;

export const DivContenedor = styled.div `
  height: 100%;
  display: flex;
  box-shadow: 0 0 15px #b8b9ba;
  border-radius: 12px; 
  margin: 15px;
  justify-content: space-around;
  background-image: url(${Img});
  background-repeat: no-repeat;
  background-size: cover;
  color: ${
    allColors.colors[8]
};
  align-items: center;
  justify-content: space-around;
  padding: 4px;
`;



export const DivContenedor2 = styled.div `
  height: 100%;
  display: flex;
 
  border-radius: 12px; 
  margin: 25px;
  color: ${
    allColors.colors[8]
};
  align-items: center;
  justify-content: space-around;
  padding: 4px;
  input {
    width: 28rem;
    height: 40px;
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
  
    }
    select {
    width: 28rem;
    height: 40px;
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
    cursor: pointer;
    }
`;

export const FormStyle = styled.form `
  background-color: ${
    allColors.colors[8]
    
};
border-radius: 9px;
  align-items: center;
`;

export const DivInputs = styled.div `
  display: flex;
  flex-direction: column;
  padding: 1px;
 
`;

export const Left = styled.div `
  width: 40%;
  border-radius: 9px;
  margin: 0;
  font-size: 15px;
  text-align: center;
  border-radius: 12px;
  h1 {
    color: ${
    allColors.colors[8]
};
    font-size: 10px !important;
  }
`;

export const Right = styled.div `
  background-color: white;
  width: 60%;
  padding: 13px;
  margin: 19px;
  
  border-radius: 12px;
  h2 {
    color: ${
    allColors.colors[8]
    
};
    font-size: 14px !important;
  }
  span {
    color: ${
    allColors.colors[2]
};
    font-size: 13px !important;
  }
  h1 {
    color: ${
    allColors.colors[2]
};
    font-size: 15px !important;
    text-align: center;
  }
  h3 {
    text-align: center;
    color: ${
    allColors.colors[3]
};
    font-size: 13px !important;
  }
  p {
    font-size: 13px;
  }
`;


export const StyledCard = styled.div`
  height: 390px ;
  width: 285px;
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
  box-shadow: 0 0 15px #ddd;
  background: #fff;
  text-align: center;
  text-decoration: none;
  
  align-self: start;
  
  &:hover {
  top: -2px;
  background-color:${allColors.colors[8]};
  color: #ffffff;
  text-decoration: none;
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  transform: scale(0.89);
 
}
`;



export const PrimerLeft = styled.div `
  width: 60%;
  border-radius: 9px;
  margin: 0;
  
  text-align: center;
  border-radius: 12px;
  h2 {
    color: ${
    allColors.colors[8]
};
font-size: 28px ;
  }
h2 {
    color: ${
    allColors.colors[1]
};
font-size: 15px ;}
h3 {
    color: ${
    allColors.colors[0]
};
}
   
`;

export const PrimerRight = styled.div `
 
  width: 40;
  
  margin: 10px;
  /* box-shadow: 0 0 15px #b8b9ba;
  border-radius: 12px; */
  h2 {
    color: ${
    allColors.colors[8]
};
    font-size: 12px !important;
  }
  span {
    color: ${
    allColors.colors[2]
};
    font-size: 13px !important;
  }
  h1 {
    color: ${
    allColors.colors[2]
};
    font-size: 10px !important;
    text-align: center;
  }
  h3 {
    text-align: center;
    color: ${
    allColors.colors[3]
};
    font-size: 13px !important;
  }
  p {
    font-size: 13px;
  }
`;