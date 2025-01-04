export const ADICIONAR_COLABORADOR = 'ADICIONAR_COLABORADOR';
export const DELETAR_COLABORADOR = 'DELETAR_COLABORADOR';
export const FAVORITAR_COLABORADOR = 'FAVORITAR_COLABORADOR';

const ReducerColaboradores = (state, action) => {
    switch (action.type) {
        case ADICIONAR_COLABORADOR:
            return [...state, action.colaborador];

        case DELETAR_COLABORADOR:
            return state.filter(colaborador => colaborador.id !== action.id);

        case FAVORITAR_COLABORADOR:
            return state.map((colaborador) => {
                if(colaborador.id === action.id) {
                    return { ...colaborador, favorito: !colaborador.favorito };
                }
                return colaborador;
            });

        default:
            return state;
    }
}

export default ReducerColaboradores;