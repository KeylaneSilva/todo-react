import * as S from './styles'

export const AddArea = () => {
    return(
        <S.Contairner>
            <div className="image">➕</div>
            <input 
                type="text"
                placeholder = "Adicione sua tarefa"/>
        </S.Contairner>
    )
}