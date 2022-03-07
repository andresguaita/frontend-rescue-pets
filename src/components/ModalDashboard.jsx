import React from 'react'
import styled from 'styled-components'

export const ModalDashboard = ({ children, modal, setModal }) => {
    return (
        <>
            {modal &&
                <Overlay>
                    <ModalContain className= "animate__animated animate__fadeInDown">
                        <Header>
                            <h3>Editar Registro</h3>
                        </Header>
                        <CloseButton onClick={()=> setModal(false)}><i className="fas fa-times  fa-2x"></i></CloseButton>
                        {children}
                    </ModalContain>

                </Overlay>
            }
        </>
    )
}

const Overlay = styled.div`
 width: 100vw;
 height:100vh;
 position: fixed;
 top: 0;
 left: 0;
 background: rgba(0,0,0,.5);
 backdrop-filter: blur(3px);
 display: flex;
 padding: 40px;
 align-items: center;
 justify-content: center;
 transition: all 1s;
`;

const ModalContain = styled.div`
 width: 500px;
 min-height: 100px;
 background: #fff;
 position: relative;
 border-radius: 5px;
 box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
 padding: 20px;
`;

const Header = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-bottom: 20px;
 border-bottom: 1px solid #E8E8E8;
 h3 {
     font-weight: 800;
     font-size: 16px;
     color: black;
 }
`;

const CloseButton = styled.button`
 
 position: absolute;
 top: 35px;
 right: 20px;
 width: 30px;
 height: 30px;
 border: none;
 background: none;
 cursor: pointer;
 transition: .3s ease all;
 border-radius: 5px;
 color: #1766DC;

 &:hover{
     background: #f2f2f2;
 }



`;