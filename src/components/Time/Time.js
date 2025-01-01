import { Colaborador } from "../Colaborador/Colaborador";
import hexToRgba from "hex-to-rgba";
import "./Time.css";

export const Time = ({time, colaboradores, aoDeletar, mudarCor, aoFavoritar}) => {
    return (
        colaboradores.length > 0 &&
        <section className="time" style={{ backgroundImage: 'url(/assets/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.5')}}>
            <input type="color" value={time.cor} onChange={evento => mudarCor(evento.target.value, time.id)} className="input-color"/>
            <h3 style={{borderColor: time.cor}}>{time.nome}</h3>
            <div className="colaboradores">
                {colaboradores.map((colaborador, indice) =>{
                    return ( 
                        <Colaborador 
                            key={indice} 
                            corFundo={time.cor} 
                            colaborador= {colaborador}
                            aoDeletar={aoDeletar }
                            aoFavoritar={aoFavoritar}
                        />
                    )
                }
            )}
            </div>
        </section>
    );
};
