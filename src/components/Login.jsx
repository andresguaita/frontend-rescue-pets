import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { startGoogleLogin, startLogin } from '../Redux/Actions';
import { Container, Button, Center, MiniText, LinkStyle, Background, Cuadro } from '../Styles/StyledLogin'



const Login = () => {

    const dispatch= useDispatch()

    const [input, setInput] = useState({
        email: '',
        password: ''
      });
    
      const handleChange = (e) => {
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        });
     
      };  

      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(startLogin(input.email, input.password))
        setInput({
          email: '',
          password: ''
        });
    
      };

      const handleGoogleLogin = () => {
        dispatch(startGoogleLogin())
      }
  return (
    <Background>
        <Center>
            <Container><Cuadro>
                <h1 className="header1">Iniciar sesión</h1>
                <div className='centerButtons'>
                    <button className="loginBtn loginBtn--facebook">
                    Continuar con Facebook
                    </button>

                    <button onClick={handleGoogleLogin} class="loginBtn loginBtn--google">
                    Continuar con Google
                    </button>
                </div>
                <h2 className="header1">ó</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-parent">
                        <label>Correo electrónico</label>
                        <input name="email" value={input.email} type="text" id="username" onChange={handleChange}></input>
                    </div>
                    <div className="input-parent">
                        <label>Contraseña</label>
                        <input name='password' value={input.password} type="password" id="password" onChange={handleChange}></input>
                    </div>
                    <MiniText ><Link to='/forgotpassword'>¿Olvidó su contraseña?</Link> </MiniText>
                <Button type="submit">Iniciar sesión</Button>
                </form>

                <MiniText >¿No tienes cuenta? <Link to='/register'>Regístrate!</Link> </MiniText>
                </Cuadro>   
            </Container>
        </Center>

        
    </Background>

  )
}

export default Login