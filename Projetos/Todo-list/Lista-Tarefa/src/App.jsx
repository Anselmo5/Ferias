import { useState,useEffect } from 'react'
import Home from './components/home.jsx'
import useFecth from './hooks/useFecth.jsx'
import git from './assets/git.png'
import instagram from './assets/instagram.png'
import linkedin from './assets/linkedin.png'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
    const url = 'http://localhost:3000/Tarefas'
    const [Tarefas,setTarefas] = useState()
    const [hor,setHor] = useState()
    const [name,setName] = useState()
    const {data:items,httpconfig,loading,error} = useFecth(url)

    const enviotarefa = async (event) => {
        event.preventDefault()

        const tarefa ={
          name,
          hor,
        }

        httpconfig(tarefa,"POST")
        setName("")
        setHor("")
    }




  return (
    <>
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
                          <button onClick={() => enviotarefa()}> ADICIONAR</button>
                      </div>
                  </div>

                  <div className='alingtarefas'>
                      <div className='tarefas'>
                        <h3>TAREFAS</h3>


                {loading &&
                  <div class="wrapper">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="shadow"></div>
                    <div class="shadow"></div>
                    <div class="shadow"></div>
                  </div>                
                }
                {error&& <p>{error}</p>}

                {!loading &&   
                  <ul className='form'>
                      {items && items.map((tarefa) => (  //sintaxe do uso do map
                        <li key={tarefa.id} className='form2'>
                          {tarefa.name} R$: {tarefa.hor} 
                        </li>
                      ))}
                    </ul>
                    }

                      </div>
                  </div>
                </div>
            </div>
         </div>
    </>
  )
}

export default App 
