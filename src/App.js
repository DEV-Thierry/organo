import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import { Time } from './components/Time/Time';
import { Rodape } from './components/Rodape/Rodape';
import {v4 as uuidv4} from 'uuid'

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278',

    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#D86EBF'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor:'#FFBA05',
    },
    {
      id: uuidv4(),
      nome: 'Inovacao e Gestao',
      cor: '#FF8A29'
    },
  ])
  const [colaboradores, setColaboradores] = useState([
    {
      id: uuidv4(),
      nome: 'Henri Dantas',
      cargo: 'Desenvolvedor back-end',
      imagem: 'https://github.com/HenriDantas.png',
      time: 'Programação',
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Henri Dantas',
      cargo: 'Desenvolvedor back-end',
      imagem: 'https://github.com/HenriDantas.png',
      time: 'Front-End',
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Henri Dantas',
      cargo: 'Desenvolvedor back-end',
      imagem: 'https://github.com/HenriDantas.png',
      time: 'Data Science',
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Henri Dantas',
      cargo: 'Desenvolvedor back-end',
      imagem: 'https://github.com/HenriDantas.png',
      time: 'Devops',
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Thierry',
      cargo: 'Desenvolvedor Front-end',
      imagem: 'https://github.com/DEV-Thierry.png',
      time: 'Programação',
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Thierry',
      cargo: 'Desenvolvedor Front-end',
      imagem: 'https://github.com/DEV-Thierry.png',
      time: 'Front-End',
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Thierry',
      cargo: 'Desenvolvedor Front-end',
      imagem: 'https://github.com/DEV-Thierry.png',
      time: 'Data Science',
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Thierry',
      cargo: 'Desenvolvedor Front-end',
      imagem: 'https://github.com/DEV-Thierry.png',
      time: 'Devops',
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Paulo Silveira',
      cargo: 'CEO',
      imagem: 'https://github.com/peas.png',
      time: 'Programação',
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Paulo Silveira',
      cargo: 'CEO',
      imagem: 'https://github.com/peas.png',
      time: 'Front-End',
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Paulo Silveira',
      cargo: 'CEO',
      imagem: 'https://github.com/peas.png',
      time: 'Data Science',
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Paulo Silveira',
      cargo: 'CEO',
      imagem: 'https://github.com/peas.png',
      time: 'Devops',
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Vinicius Neves',
      cargo: 'Tech Lead',
      imagem: 'https://github.com/Viniciusneves.png',
      time: 'Programação',
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Vinicius Neves',
      cargo: 'Tech Lead',
      imagem: 'https://github.com/Viniciusneves.png',
      time: 'Front-End',
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Vinicius Neves',
      cargo: 'Tech Lead',
      imagem: 'https://github.com/Viniciusneves.png',
      time: 'Data Science',
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Vinicius Neves',
      cargo: 'Tech Lead',
      imagem: 'https://github.com/Viniciusneves.png',
      time: 'Devops',
      favorito: false
    },
  ])


  function deletarColaborador(id){
    console.log("deletando colaborador: ", id)
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCorTime(cor, id){
    setTimes(times.map(time => {
      if(time.id === id){
        time.cor = cor;
      }
      return time;
    }))
  }

  function cadastrarTime(novoTime){
    setTimes([...times, {...novoTime, id: uuidv4() }])
  }

  function resolverFavorito(id){
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id){
        colaborador.favorito = !colaborador.favorito
      }
      return colaborador
    }))
  }


  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App container">
      <Banner />
      <Formulario
        cadastrarTime ={cadastrarTime}
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaborador=> 
          aoNovoColaboradorAdicionado(colaborador)} 
      />
      {times.map((time, indice) => 
        <Time 
          key={indice} 
          time={time}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          mudarCor={mudarCorTime}
          aoDeletar={deletarColaborador}
          aoFavoritar={resolverFavorito}
        />
      )}

      <Rodape/>
    </div>
  );
}

export default App;
