import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
const home = () => {
  return (
    <div>
        <nav>
          <div className='containernav'>
            <div className='alinglink'>
              <img src={logo} alt="" />
              <Link className='navlink active'>Home</Link>
              <Link className='navlink'>Repositorio</Link>
              <Link className='navlink'>Calculadora</Link>
            </div>
          </div>
        </nav>


        <footer>

        </footer>
    </div>
  )
}

export default home
