import { useState, KeyboardEvent } from 'react'
import * as S from './styles'

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: Props) => {
    const [inputText, setInputText] = useState('')
    
    // captura teclas do teclado
    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code == 'Enter' && inputText != null){

            onEnter(inputText)
            setInputText('')
        }
    }

    return(
        <S.Contairner>
            <div className="image">➕</div>
            <input 
                type="text"
                name="tarefa"
                placeholder = "Adicione sua tarefa"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
                />
        </S.Contairner>
    )
}