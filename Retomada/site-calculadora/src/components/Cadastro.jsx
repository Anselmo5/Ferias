import React from 'react'
import './Cadastro.css'
import { Link, useNavigate } from 'react-router-dom'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import git from '../assets/git.png'
import axios from 'axios';
import { useState } from 'react'
const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/create-user', {
        nome,
        email,
        senha,
      });
      setUser(response.data);
      navigate('/home');
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      setError(true);
    }
  };

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
      <input type="text" placeholder="Name"  onChange={(e) => setNome(e.target.value)}/>
      <input type="email" placeholder="Email" onChange={ (e) => setEmail(e.target.value)}/>
      <input type="password" placeholder="Password" onChange={(e) => setSenha(e.target.value)}/>
      <button onClick={(e)=> handleSubmit(e)}>INSCREVER-SE</button>
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

export default Cadastro
