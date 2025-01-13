import './Campo.css';
import React from 'react'

interface CampoProps{
    type?: string,
    aoAlterado: (valor: string) => void,
    label: string,
    valor: any,
    required?: boolean,
    placeholder: string
}

const Campo = ({type = '' ,aoAlterado, label, valor, required, placeholder} : CampoProps) => {
    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement> ) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input type={type} value={valor} onChange={aoDigitado} required={required} placeholder={placeholder}/>
        </div>
    )
};

export default Campo;