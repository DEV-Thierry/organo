import './CampoTexto.css';

export const CampoTexto = (props) => {
    // let valor = ''


    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
};