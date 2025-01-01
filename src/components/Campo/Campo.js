import './Campo.css';

export const Campo = ({type = '' ,aoAlterado, label, valor, required, placeholder}) => {
    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input type={type} value={valor} onChange={aoDigitado} required={required} placeholder={placeholder}/>
        </div>
    )
};