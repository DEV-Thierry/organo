import "./ListaSuspensa.css";
import React from 'react'

interface ListaSuspensaProps{
    label: string,
    timesNames: string[],
    valor: string,
    required?: boolean;
    aoAlterado: (Value: string) => void
}

export const ListaSuspensa = ({timesNames: times, label,required = false, valor, aoAlterado}: ListaSuspensaProps) => {
    return (
       <div className="lista-suspensa">
        <label>{label}</label>
        <select 
            required = {required}
            value={valor} 
            onChange={evento => aoAlterado(evento.target.value)}
        >
            <option></option>
            {times.map(time => <option key={time}>{time}</option>)}
        </select>
       </div>
    );
};
