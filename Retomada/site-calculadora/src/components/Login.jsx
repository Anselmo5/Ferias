import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import git from '../assets/git.png'
const Login = () => {
  return (
    <div>
<div class="container" id="container">
  <div class="form-container sign-in-container">
    <form action="#">
      <h1>Sign in</h1>
      <div class="social-container">
        <Link to='https://www.linkedin.com/in/anselmo-henrique-266647233/' target='_blank'><img src={linkedin} alt="" /></Link> 
        <Link to='https://www.instagram.com/anselmo_henrique02/?next=%2F' target='_blank'><img src={instagram} alt="" /></Link>
        <Link to='https://github.com/Anselmo5' target='_blank'><img src={git} alt="" /></Link>
      </div>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
        <Link to=''>Recuperar Senha</Link>
      <button>ENTRAR</button>
    </form>
  </div>
  <div class="overlay-container">
    <div class="overlay">
      <div class="overlay-panel overlay-right">
        <h1>Hellog, guys</h1>
        <p>Sejam bem vindos a Calccode, faça login e desfrute do nosso serviço</p>
        <Link to='/cadastro' class="ghost" id="signUp">INSCREVER-SE</Link>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login
