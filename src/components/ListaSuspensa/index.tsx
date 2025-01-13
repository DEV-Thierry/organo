import { ITime } from "../../Shared/interfaces/ITime";
import "./ListaSuspensa.css";
import React from 'react'

interface ListaSuspensaProps{
    label: string,
    times: string[],
    valor: string,
    aoAlterado: (Value: string) => void
}

export const ListaSuspensa = ({times, label, valor, aoAlterado}: ListaSuspensaProps) => {
    return (
       <div className="lista-suspensa">
        <label>{label}</label>
        <select value={valor} onChange={evento => aoAlterado(evento.target.value)}>
            <option></option>
            {times.map(time => <option key={time}>{time}</option>)}
        </select>
       </div>
    );
};
