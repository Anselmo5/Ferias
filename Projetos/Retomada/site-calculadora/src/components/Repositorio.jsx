import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import logogit from '../assets/gitlogo.png'
import './Repositorio.css'
const Repositorio = () => {


  const handlerreferen = () => {
    window.location.href = "https://github.com/Anselmo5/Ferias/tree/main/Retomada"
  }

  return (
    <div>
         <nav>
      <div className='alingcontrepo'>

      <div className='formimgrepo'>
              <img src={logo} alt="" />
            </div>
    
        <div className='contrepo'>
                <Link to='/home'>Home</Link>
                <Link to=''>Repositorio</Link>
                <Link to='/calculadora'>Calculadora</Link>
          </div>

        </div>
      </nav>

        <div className='alingformrepo'>
            <div className='formrepo'>
                <div className='imgrepo'>
                  <img src={logogit} alt="" />
                </div>
                <button onClick={() =>handlerreferen() }>ENTRAR</button>
            </div>
        </div>
  <div className='footerrepo'>
      <footer>
          <div className='footercontrepo'>
              <div className='footerlogorepo'>
                  <img src={logo} alt="" />
              </div>

              <div className='conttextrepo'>
                  <h2>Informações e  dados rezervados</h2>
              </div>
          </div>
      </footer>
  </div>
    </div>
  )
}

export default Repositorio
