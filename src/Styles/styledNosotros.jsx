import styled from 'styled-components'
import allColors from '../variables/Colors'
import n1 from "../Icos/N/n1.png"
import n2 from "../Icos/N/n2.jpg"
import n3 from "../Icos/N/n3.jpeg"
import n4 from "../Icos/N/n4.jpeg"
import n5 from "../Icos/N/n5.jpeg"
import n6 from "../Icos/N/n6.jpeg"
import n7 from "../Icos/N/n7.jpeg"
import n8 from "../Icos/N/n8.jpeg"
import n9 from "../Icos/N/n9.jpeg"

export const DivContainerNos = styled.div`
top: 15rem;
  width: 100%;
  min-height: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;

  

  h1{
      color: ${allColors.colors[8]};
      font-family: roboto;
      font-size: 50px;
    
  }
`

export const GridStyled = styled.div`
display: grid;
grid-template-columns: 2fr 1fr;
height: 500px;
align-items: center;
justify-content: center;

.Right{
    
    img{
    width: 300px;
}

.Left{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    .contenedor{
        display: flex;
        flex-direction: column;
        text-align: center;
    }
}
}

`

export const Ailen = styled.div`
background-color: red;
width: 150px;
height: 150px;
border-radius: 50%;
background-image: url(${n1});
  background-repeat: no-repeat;
  background-size: cover;
`
export const Jean = styled.div`
background-color: red;
width: 150px;
height: 150px;
border-radius: 50%;
background-image: url(${n2});
  background-repeat: no-repeat;
  background-size: cover;
`