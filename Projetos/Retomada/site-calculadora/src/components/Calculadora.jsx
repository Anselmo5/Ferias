import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Calculadora.css'
const Calculadora = () => {
  const [quantidadeVendas, setQuantidadeVendas] = useState('');
  const [Anos, setAnos] = useState('');
  const [totalValor, setTotalValor] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularResultado = () => {
    const resultadoCalculado = quantidadeVendas*Anos*365*totalValor; 

    // Atualize o estado do resultado
    setResultado(resultadoCalculado);
  };


  return (
    <div>
             <nav>
      <div className='alingcontcalc'>

      <div className='formimgcalc'>
              <img src={logo} alt="" />
            </div>
    
        <div className='contcalc'>
                <Link to='/home'>Home</Link>
                <Link to='/repositorio'>Repositorio</Link>
                <Link to=''>Calculadora</Link>
          </div>

        </div>
      </nav>

        <div className='alingformcalc'>
            <div className='formcalc'>
                <h2>Faça Seu Calculo Aqui</h2>
            <div className='calcaling'>
                    <div className='calcinp'>
                          <input 
                            type="number" 
                            placeholder='ENSIRA A QUANTIDADE DE VENDAS FEITAS' 
                            value={quantidadeVendas}
                            onChange={(e) => setQuantidadeVendas(e.target.value)} 
                            />
                          <input 
                            type="number" 
                            placeholder='ENSIRA OS ANOS'
                            value={Anos} 
                            onChange={(e) => setAnos(e.target.value)}
                          />
                    </div>

                    <div className='calcinpbtn'>
                        <input 
                          type="text" 
                          placeholder='TOTAL DO VALOR NO ANO$' 
                          value={totalValor}
                          onChange={(e) => setTotalValor  (e.target.value)}
                          />
                        <button onClick={calcularResultado}>CALCULAR</button>
                    </div>

                    <div className='resultcalc'>
                          <input 
                          type="text" 
                          placeholder='RESULTADO' 
                          value={resultado}
                          onChange={(e) => setResultado(e.target.value)}
                          disabled/>
                    </div>
                </div>
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
