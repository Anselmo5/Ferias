import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Calculadora.css'
const Calculadora = () => {
  return (
    <div>
             <nav>
      <div className='alingcontcalc'>

      <div className='formimgcalc'>
              <img src={logo} alt="" />
            </div>
    
        <div className='contcalc'>
                <Link to='/home'>Home</Link>
                <Link to=''>Repositorio</Link>
                <Link to='/calculadora'>Calculadora</Link>
          </div>

        </div>
      </nav>

        <div className='alingformcalc'>
            <div className='formcalc'>
                <button onClick={() =>handlerreferen() }>CALCULAR</button>
            </div>
        </div>

  <div className='footercalc'>
      <footer>
          <div className='footercontcalc'>
              <div className='footerlogocalc'>
                  <img src={logo} alt="" />
              </div>

              <div className='conttextcalc'>
                  <h2>Informações e  dados rezervados</h2>
              </div>
          </div>
      </footer>
  </div>
    </div>
  )
}

export default Calculadora
