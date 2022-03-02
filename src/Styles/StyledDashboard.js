import styled from "styled-components";
import allColors from "../variables/Colors";
import Img from "../Icos/wave2.svg";

export const Container = styled.div`
  //Contenedor
  height: 100%;
  display: flex;
  color: ${allColors.colors[8]};
  align-items: center;
  justify-content: space-around;
  background-image: url(${Img});
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 80px;
  padding: 40px;
`;

export const Left = styled.div`
  width: 30%;
  padding: 8px;
  
`;

export const LeftMini = styled.div`
  box-shadow: 0 0 7px #b8b9ba;
  border-radius: 7px;
margin-top: 1em;
  font-size: 14px;
  text-align: center;
  line-height: 40px;
  background-color: white;
  height: 40px;
  overflow: hidden; 
cursor: pointer;
text-decoration: none;

a{
  color:${allColors.colors[8]};
}

  &:hover {
  top: 1px;
  background-color:${allColors.colors[3]};
  color: white;
  text-decoration: none;
  border-radius: 7px;
  box-shadow: 0 0 7px gray;

  a{
    color: white;
  }
}

  h1 {
    color: ${allColors.colors[8]};
    font-size: 12px !important;
  }
`;

export const Right = styled.div`
  width: 70%;
  padding: 48px;
  margin: 19px;
  box-shadow: 0 0 15px #b8b9ba;
  border-radius: 12px;
  background-color: white;
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

  p {
    font-size: 15px;
  }
`;

export const img1 = styled.img`
  width: 130%;
`;


