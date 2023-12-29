import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
const Home = () => {
  return (
    <div>
    <nav>
      <div className='alingconthome'>

      <div className='formimg'>
              <img src={logo} alt="" />
            </div>

        <div className='conthome'>
                <Link className='active'>Home</Link>
                <Link to='/repositorio'>Repositorio</Link>
                <Link to='/calculadora'>Calculadora</Link>
          </div>

        </div>
      </nav>


        <div className='alingtexthome'>
            <div className='texthome'>
                <h2>Olá Pessoal</h2>
                <p>Somos a empressa Calccode, <br/>nosso objetivo e calcular o lugto de venda da sua empressa no <br/> ano quantidade de vendas pelos dias ou anos <br/> que você deseja calcular</p>
            </div>
        </div>

      <footer>
          <div className='footerconthome'>
              <div className='footerlogo'>
                  <img src={logo} alt="" />
              </div>

              <div className='conttexthome'>
                  <h2>Informações e  dados rezervados</h2>
              </div>
          </div>
      </footer>
    </div>
  )
}

export default Home