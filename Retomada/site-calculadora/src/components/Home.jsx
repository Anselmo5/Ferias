import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
const Home = () => {
  return (
    <div>
        <nav>
          <div className='containernav'>
            <div className='alinglink'>
              <img src={logo} alt="" />
              <Link className='navlink active'>Home</Link>
              <Link to='/repositorio' className='navlink'>Repositorio</Link>
              <Link to='/calculadora' className='navlink'>Calculadora</Link>
            </div>
          </div>
        </nav>


        <footer>
            <div className='footerinforme'>
              <img src={logo} alt="" />
              <h2>Informações e  dados rezervado</h2>
            </div>
        </footer>
    </div>
  )
}

export default Home