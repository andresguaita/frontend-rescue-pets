import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { startGoogleLogin, startLogin } from '../Redux/Actions';
import { Container, Button, Center, MiniText, LinkStyle, Background, Cuadro } from '../Styles/StyledLogin'
import ReCAPTCHA from "react-google-recaptcha";



const Login = () => {

  const dispatch = useDispatch()

  const [input, setInput] = useState({
    email: '',
    password: ''
  });

  const captcha = useRef(null)

  const [captchaValid, setCaptchaValid] = useState(false)

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

  const onChange = ()=>{
    if(captcha.current.getValue()){
      setCaptchaValid(true)
    }
  }
  return (
    <Background>
      <Center>
        <Container><Cuadro>
          <h1 className="header1">Iniciar sesión</h1>
          <div className='centerButtons'>
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
            <div style={{display: 'flex',justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
              <ReCAPTCHA
                ref={captcha}
                sitekey="6Lch0sQeAAAAABQIXlfPAHknKHDzPyfmQOgg4WJe"
                onChange={onChange}
              />
            </div>
            <Button 
             className="btn" 
            type="submit"
            disabled={
              !captchaValid
                ? true
                : false
            }
            >Iniciar sesión
            </Button>
          </form>

          <MiniText >¿No tienes cuenta? <Link to='/register'>Regístrate!</Link> </MiniText>
        </Cuadro>
        </Container>
      </Center>


    </Background>

  )
}

export default Login