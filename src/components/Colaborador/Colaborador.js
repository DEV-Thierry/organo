import "./Colaborador.css";
import { IoIosCloseCircle } from "react-icons/io";

export const Colaborador = ({colaborador, corFundo, aoDeletar}) => {
    return (
        <div className="colaborador">
            <IoIosCloseCircle 
                size={25} 
                className="deletar" 
                onClick={()=>aoDeletar(colaborador.id)}
            />

            <div 
                className="cabecalho" 
                style={{backgroundColor: corFundo}}
            >
                <img src={colaborador.imagem} alt="imagem do colaborador"/>
            </div>
            <div className="rodape">
                <h4>{ colaborador.nome }</h4>
                <h5> { colaborador.cargo } </h5>
            </div>
        </div>
    );
};
