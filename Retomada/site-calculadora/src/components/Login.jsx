import React from 'react'
import './login.css'
import { Link,useNavigate } from 'react-router-dom'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import git from '../assets/git.png'
import { useState } from 'react'
import axios from 'axios';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    // Validar se o email e senha foram preenchidos
    if (!email || !password) {
      setError('Preencha todos os campos');
      return;
    }
  
    try {
      const response = await axios.post(
        'http://localhost:3001/login',
        JSON.stringify({ email, password }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
  
      console.log(response.data);
      setUser(response.data.user);
  
      // Redirect to the page specified in the response
      navigate(response.data.redirect);
    } catch (error) {
      if (!error?.response) {
        setError('Erro ao acessar o servidor');
      } else if (error.response.status === 401) {
        setError('Usuário ou senha inválidos');
      }
    }
  };

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
      <input type="email" placeholder="Email" required  onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
        <Link to=''>Recuperar Senha</Link>
      <button onClick={(e) => handleLogin(e)}>ENTRAR</button>
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
