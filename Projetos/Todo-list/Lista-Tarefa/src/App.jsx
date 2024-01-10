import { useState } from 'react';
import Home from './components/home.jsx';
import useFetch from './hooks/useFecth.jsx';
import git from './assets/git.png';
import instagram from './assets/instagram.png';
import linkedin from './assets/linkedin.png';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const url = 'http://localhost:3000/Tarefas';
  const [Tarefas, setTarefas] = useState();
  const [hor, setHor] = useState();
  const [name, setName] = useState();
  const {  data: items, httpConfig, loading, error  } = useFetch(url);

  function envioTarefa(event) {
    event.preventDefault();

    const tarefa = {
      name,
      hor,
    };

    httpConfig(tarefa, 'POST');
    setName('');
    setHor('');
  }


  function excluirTarefa(id) {
    httpConfig(id,'DELETE');
  }





  return (
    <>
      <div className='alingcontainer'>
        <div className='mensege'>
          <h2>LISTA DE TAREFAS</h2>
        </div>
        <div className='container'>
          <div>
            <div className='midiaaling'>
              <div className='formmidia'>
                <a href='https://www.instagram.com/anselmo_henrique02/?next=%2F' target='_blank'>
                  <img src={instagram} alt='' />
                </a>
                <a href='https://www.linkedin.com/in/anselmo-henrique-266647233/' target='_blank'>
                  <img src={linkedin} alt='' />
                </a>
                <a href='https://github.com/Anselmo5' target='_blank'>
                  <img src={git} alt='' />
                </a>
              </div>
            </div>

            <div className='alingenvio'>
              <div className='tarefaenvio'>
                <input
                  type='text'
                  placeholder='Tarefa'
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <input
                  type='text'
                  placeholder='Hora'
                  value={hor}
                  onChange={(event) => setHor(event.target.value)}
                />
                <button onClick={envioTarefa}> ADICIONAR</button>
              </div>
            </div>

            <div className='alingtarefas'>
              <div className='tarefas'>
                <h3>TAREFAS</h3>

                {loading && (
                  <div class='wrapper'>
                    <div class='circle'></div>
                    <div class='circle'></div>
                    <div class='circle'></div>
                    <div class='shadow'></div>
                    <div class='shadow'></div>
                    <div class='shadow'></div>
                  </div>
                )}
                {error && <p>{error}</p>}

                {!loading && (
                  <div className='Tarefas'>
                    <ul className='form'>
                      {items &&
                        items.map((tarefa) => (
                          <li key={tarefa.id} className='form2'>
                            Tarefa: {tarefa.name} / Hora: {tarefa.hor} <button onClick={() =>excluirTarefa(tarefa.id)}>EXCLUIR</button>

                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
