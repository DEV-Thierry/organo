import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import { Time } from './components/Time/Time';
import { Rodape } from './components/Rodape/Rodape';

function App() {
  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      cor: '#57C278',

    },
    {
      nome: 'Front-End',
      cor: '#82CFFA'
    },
    {
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      nome: 'UX e Design',
      cor: '#D86EBF'
    },
    {
      nome: 'Mobile',
      cor:'#FFBA05',
    },
    {
      nome: 'Inovacao e Gestao',
      cor: '#FF8A29'
    },
  ])
  const [colaboradores, setColaboradores] = useState([])

  function deletarColaborador(){
    console.log("deletando colaborador")
  }

  function mudarCorTime(cor, nome){
    setTimes(times.map(time => {
      if(time.nome === nome){
        time.cor = cor;
      }
      return time;
    }))
  }

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App container">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador=> aoNovoColaboradorAdicionado(colaborador)} />
      {times.map((time, indice) => 
        <Time 
          key={indice} 
          time={time}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
          mudarCor={mudarCorTime}
          />
      )}

      <Rodape/>
    </div>
  );
}

export default App;
