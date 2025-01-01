import "./Colaborador.css";
import { IoIosCloseCircle } from "react-icons/io";
import { IoHeartOutline, IoHeart } from "react-icons/io5";

export const Colaborador = ({colaborador, corFundo, aoDeletar, aoFavoritar}) => {
    function favoritar(){
        aoFavoritar(colaborador.id)
    }

    const propsFavorito ={
        size: 25,
        onClick: favoritar
    }

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
                <div className="favorito">
                    { colaborador.favorito 
                        ? <IoHeart {...propsFavorito} color="#FF0000"/> 
                        : <IoHeartOutline {...propsFavorito}/> 
                    }
                </div>
            </div>
        </div>
    );
};
