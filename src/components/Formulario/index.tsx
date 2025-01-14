import "./Formulario.css";
import Campo from "../Campo"
import { ListaSuspensa } from "../ListaSuspensa";
import { Botao } from "../Botao/Botao";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import React from 'react'
import { IColaborador } from "../../Shared/interfaces/IColaborador";
import { INovoTime } from "../../Shared/interfaces/INovoTime";

interface FormularioProps{
  aoColaboradorCadastrado: (colaborador:IColaborador) => void,
  timesNames: string[],
  cadastrarTime: (novoTime: INovoTime) => void
}


export const Formulario = ({aoColaboradorCadastrado, timesNames, cadastrarTime }: FormularioProps) => {

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')
  const [nomeTime, setNomeTime] = useState('')
  const [corTime, setCorTime] = useState('')

  const aoSalvar = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    aoColaboradorCadastrado({
      id: uuidv4(),
      nome,
      cargo,
      imagem,
      time,
      favorito: false
    })

    setNome('');
    setCargo('');
    setImagem('');
    setTime('')
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Campo 
            label="Nome" 
            required={true} 
            placeholder="Digite seu nome" 
            valor={nome}
            aoAlterado= {valor => setNome(valor)}
          />

        <Campo 
            label="Cargo" 
            required={true} 
            placeholder="Digite seu cargo" 
            valor={cargo}
            aoAlterado = {valor => setCargo(valor)}
          />

        <Campo 
            label="Imagem" 
            placeholder="Digite o enderço da imagem" 
            valor={imagem}
            aoAlterado = {valor => setImagem(valor)}
          />

        <ListaSuspensa 
            required= {true}
            label="Time" 
            timesNames={timesNames}
            valor={time}
            aoAlterado={valor => setTime(valor)}
          />
        <Botao>
          Criar card
        </Botao>
      </form>

      <form onSubmit={(evento => {
        evento.preventDefault()
        cadastrarTime({nome: nomeTime, cor: corTime})
      })}>
        <h2>Preencha os dados para criar um novo time</h2>
        <Campo 
            label="Nome" 
            required
            placeholder="Digite o nome do time" 
            valor={nomeTime}
            aoAlterado= {valor => setNomeTime(valor)}
          />

        <Campo 
            label="Cargo"
            type="color"
            required
            placeholder="Digite a cor do time" 
            valor={corTime}
            aoAlterado = {valor => setCorTime(valor)}
          />
        <Botao>
          Criar um novo time
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;