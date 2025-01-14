import { Colaborador } from "../Colaborador";
import hexToRgba from "hex-to-rgba";
import "./Time.css";
import { IColaborador } from "../../Shared/interfaces/IColaborador";
import { ITime } from "../../Shared/interfaces/ITime";


interface TimeProps{
    time: ITime,
    colaboradores: IColaborador[],
    aoDeletar: (colaboradorId: string) => void,
    mudarCor: (cor:string, timeId: string) => void,
    aoFavoritar: (colaboradorId: string) => void
}

const Time = ({time, colaboradores, aoDeletar, mudarCor, aoFavoritar} : TimeProps) => {
    return (
        colaboradores.length > 0 &&
        <section className="time" style={{ backgroundImage: 'url(/assets/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.5')}}>
            <input 
                type="color" 
                value={time.cor} 
                onChange={evento => mudarCor(evento.target.value, time.id)} className="input-color"/>
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

export default Time;
