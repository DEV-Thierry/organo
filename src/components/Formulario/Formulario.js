import "./Formulario.css";
import CampoTexto from "../CampoTexto"
import { ListaSuspensa } from "../ListaSuspensa/ListaSuspensa";
import { Botao } from "../Botao/Botao";
import { useState } from "react";

export const Formulario = (props) => {

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (event) =>{
    event.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto 
            label="Nome" 
            required={true} 
            placeholder="Digite seu nome" 
            valor={nome}
            aoAlterado= {valor => setNome(valor)}
            />

        <CampoTexto 
            label="Cargo" 
            required={true} 
            placeholder="Digite seu cargo" 
            valor={cargo}
            aoAlterado = {valor => setCargo(valor)}
            />

        <CampoTexto 
            label="Imagem" 
            placeholder="Digite o enderço da imagem" 
            valor={imagem}
            aoAlterado = {valor => setImagem(valor)}
            />

        <ListaSuspensa 
            label="Time" 
            itens={props.times}
            valor={time}
            aoAlterado={valor => setTime(valor)}
            />
        <Botao>
          Criar card
        </Botao>
      </form>
    </section>
  );
};
