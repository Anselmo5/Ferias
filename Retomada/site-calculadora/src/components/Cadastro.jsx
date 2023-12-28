import React from 'react'
import './Cadastro.css'
import { Link, useNavigate } from 'react-router-dom'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import git from '../assets/git.png'
import axios from 'axios';
import logo from '../assets/logo.png'
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
        <div className='alingcadas1'>
          <div className='containercadas1  '>
            <div className='alingcontcadas'>
              <div className='contcadas'>
                  <div className='formtextcadas'>
                      <h2>Hello Pessoal</h2>
                      <p>Crie sua conta para poder desfrutar do nosso serviço</p>
                  </div>

                  <div className='enviologincadas'>
                      <Link to='/'>Já tenho conta</Link>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className='alingcadas2'>
          <div className='containercadas2'>
            <div className='alingcontcadas2'>
              <div className='contcadas2'>
                <div className='imgalingcadas'>
                      <img src={logo} alt="" />
                </div>

                <div className='contenviocadas'>
                        <input type="text" 
                        id="nome"
                        placeholder='Exemplo: Maria Clara'
                        required
                        onChange={(e) => setNome(e.target.value)}
                        
                        />
                        <input type="email" 
                        placeholder='Exemplo: Mariaclara123@gmail.com' 
                        id='email'
                        onChange={ (e) => setEmail(e.target.value)}
                        />
                        <input type="password" 
                           placeholder='No mínimo 6 caracteres'
                           id='senha'
                           onChange={(e) => setSenha(e.target.value)}
                        />
                        <button type='submit' >Criar Conta</button>

                        <div className='midiaalingcadas'>
                          <div className='formmidiacadas'>
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

    </div>
  )
}

export default Cadastro
