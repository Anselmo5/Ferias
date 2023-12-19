import React from 'react'
import './cadastro.css'
import { Link } from 'react-router-dom'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import git from '../assets/git.png'
const cadastro = () => {

  return (
    <div>
<div class="container" id="container">
  <div class="form-container sign-in-container">
  <form action="#">
      <h1>Criar Uma Conta</h1>
      <div class="social-container">
      <Link to='https://www.linkedin.com/in/anselmo-henrique-266647233/' target='_blank'><img src={linkedin} alt="" /></Link> 
        <Link to='https://www.instagram.com/anselmo_henrique02/?next=%2F' target='_blank'><img src={instagram} alt="" /></Link>
        <Link to='https://github.com/Anselmo5' target='_blank'><img src={git} alt="" /></Link>
      </div>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>INSCREVER-SE</button>
    </form>
  </div>
  <div class="overlay-container">
    <div class="overlay">
      <div class="overlay-panel overlay-right">
        <h1>Welcome Back!</h1>
        <p>Insira seus dados pessoais e comece sua jornada conosco</p>
        <Link to='/' class="ghost" id="signIn">ENTRAR</Link>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default cadastro
