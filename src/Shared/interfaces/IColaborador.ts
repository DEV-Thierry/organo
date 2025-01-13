import { ITime } from "./ITime"


export interface IColaborador{
    id: string
    nome: string, 
    cargo: string,
    imagem: string 
    time: ITime,
    favorito: boolean
}