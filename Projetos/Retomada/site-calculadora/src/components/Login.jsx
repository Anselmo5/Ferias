import React from 'react'
import './Login.css'
import { Link,useNavigate } from 'react-router-dom'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import git from '../assets/git.png'
import logo from '../assets/logo.png'
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
      <div className='alingcontainer1'>
        <div className='container1'>
          <div className='alingcont'>
            <div className='cont'>
                <div className='imgaling'>
                  <img src={logo} alt="" />
                </div>
                <div className='contenvio'>
 
                  <input type="email" 
                    placeholder='Exemplo: Mariaclara123@gmail.com'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input type="password" 
                      placeholder='No mínimo 6 caracteres '
                      required
                      onChange={(e) => setPassword(e.target.value)}
                  
                  />

                  <button onClick={(e) => handleLogin(e)}>ENTRAR</button>
                  <div className='linkcadas'>
                    <Link to='cadastro'>Criar conta</Link>
                  </div>

                  <div className='midiaaling'>
                      <div className='formmidia'>
                         <Link to='https://www.instagram.com/anselmo_henrique02/?next=%2F' target='_blank'> <img src={instagram} alt="" /></Link>
                         <Link to='https://www.linkedin.com/in/anselmo-henrique-266647233/' target='_blank'> <img src={linkedin} alt="" /></Link>
                         <Link to='https://github.com/Anselmo5' target='_blank'> <img src={git} alt="" /></Link>
                      </div>
                  </div>

              </div>
            </div>
        </div>
      </div>
    </div>

    <div className='alingcontainer2'>
      <div className='container2'>
        <div className='alingcont2'>
          <div className='cont2'>
            <div className='formtext'>
                <h2>Hello Pessoal</h2>
                <p>Sejam bem vindos a Calccode, faça login e desfrute do nosso serviço</p>
            </div>

            <div className='enviocadas'>
              <Link to='cadastro'>Criar conta</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Login
