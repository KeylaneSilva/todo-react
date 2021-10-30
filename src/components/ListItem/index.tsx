import { useState } from 'react'
import * as S from './style'
import { Item } from '../../types/Item'

type Props = {
    item: Item; 
}

export const ListItem = ({item}: Props) => {
    
    const [isCheck, setIsCheck] = useState(item.done)
    
    return(
        <S.Container done={isCheck}>
            <input 
                type="checkbox" 
                checked={isCheck}
                onChange={e => setIsCheck(e.target.checked)}
                />
            <label>{item.name}</label>
        </S.Container>
    )
}