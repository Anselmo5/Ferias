import React from 'react'
import './home.css'
import git from '../assets/git.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import { Link } from 'react-router-dom'

const home = () => {
  return (
    <div>
        <div className='alingcontainer'>
                 <div className=' mensege'>
                  <h2>LISTA DE TAREFAS</h2>
                 </div>
            <div className='container'>
                <div>
                <div className='midiaaling'>
                      <div className='formmidia'>
                         <Link to='https://www.instagram.com/anselmo_henrique02/?next=%2F' target='_blank'> <img src={instagram} alt="" /></Link>
                         <Link to='https://www.linkedin.com/in/anselmo-henrique-266647233/' target='_blank'> <img src={linkedin} alt="" /></Link>
                         <Link to='https://github.com/Anselmo5' target='_blank'> <img src={git} alt="" /></Link>
                      </div>
                  </div>

                  <div className='alingenvio'>
                      <div className='tarefaenvio'>
                          <input type="text" />
                          <button> ADICIONAR</button>
                      </div>
                  </div>

                  <div className='alingtarefas'>
                      <div className='tarefas'>
                        <h3>TAREFAS</h3>
                      </div>
                  </div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default home
