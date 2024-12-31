import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import { Time } from './components/Time/Time';

function App() {
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App container">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador=> aoNovoColaboradorAdicionado(colaborador)} />
      <Time nome="Programacao"/>
      <Time nome="Frontend"/>
    </div>
  );
}

export default App;
