import { Colaborador } from "../Colaborador/Colaborador";
import "./Time.css";

export const Time = ({time, colaboradores, aoDeletar}) => {
    return (
        colaboradores.length > 0 &&
        <section className="time" style={{backgroundColor: time.corSecundaria}}>
            <h3 style={{borderColor: time.corPrimaria}}>{time.nome}</h3>
            <div className="colaboradores">
                {colaboradores.map((colaborador, indice) =>{
                    
                    return <Colaborador 
                        key={indice} 
                        corFundo={time.corPrimaria} 
                        colaborador= {colaborador}
                        aoDeletar={aoDeletar } 
                    />
                }
            )}
            </div>
        </section>
    );
};
