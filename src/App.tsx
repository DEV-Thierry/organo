import { useReducer, useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time  from './components/Time';
import {v4 as uuidv4} from 'uuid';
import ReducerColaboradores, { FAVORITAR_COLABORADOR,  ADICIONAR_COLABORADOR, DELETAR_COLABORADOR}  from './Helpers/ReducerColaboradores';
import { INovoTime } from './Shared/interfaces/INovoTime';
import { IColaborador } from './Shared/interfaces/IColaborador';
import Rodape from './components/Rodape';
// import  {ADICIONAR_COLABORADOR}  from './Helpers/ReducerColaboradores';



function App() {

  const [empregados, dispatchColaboradores] = useReducer(ReducerColaboradores, [
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
      nome: 'Marcelio Junior',
      cargo: 'CEO',
      imagem: 'https://github.com/rhesker.png',
      time: 'Programação',
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Marcelio Junior',
      cargo: 'CEO',
      imagem: 'https://github.com/rhesker.png',
      time: 'Front-End',
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Marcelio Junior',
      cargo: 'CEO',
      imagem: 'https://github.com/rhesker.png',
      time: 'Data Science',
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Marcelio Junior',
      cargo: 'CEO',
      imagem: 'https://github.com/rhesker.png',
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


  function deletarColaborador(id: string){
    console.log("deletando colaborador: ", id)
    dispatchColaboradores(
      {
        type: DELETAR_COLABORADOR, 
        id
      }
    )
  }

  function mudarCorTime(cor: string, id: string){
    setTimes(times.map(time => {
      if(time.id === id){
        time.cor = cor;
      }
      return time;
    }))
  }

  function cadastrarTime(novoTime: INovoTime){
    setTimes([...times, {...novoTime, id: uuidv4() }])
  }

  function resolverFavorito(id: string){

    dispatchColaboradores({
      type: FAVORITAR_COLABORADOR,
      id
    })
  }


  const aoNovoColaboradorAdicionado = (colaborador: IColaborador) => {
    dispatchColaboradores({
      type: ADICIONAR_COLABORADOR,
      colaborador
    })
  }

  return (
    <div className="App container">
      <Banner enderecoImagem="/assets/banner.png"/>
      <Formulario
        cadastrarTime ={cadastrarTime}
        timesNames={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaborador=> 
          aoNovoColaboradorAdicionado(colaborador)} 
      />
      {times.map((time, indice) => 
        <Time 
          key={indice} 
          time={time}
          colaboradores={empregados.filter(colaborador => colaborador.time === time.nome)}
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
