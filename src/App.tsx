import { useState } from 'react'
import * as C from './App.styles';
import './App.css';
import { Item } from './types/Item'
import { ListItem } from './components/ListItem'

function App() {

  const [list , setList] = useState<Item[]>([
    {id: 1, name: 'Acordar 6 da manhã', done: false},
    {id: 2, name: 'Estudar react 8 AM', done: false}

  ])

  return (
    <div>
      <C.Container>
        <C.Area>
          <C.Header>Lista de tarefas</C.Header>
        
          {/* input da lista */}

          {/* listar minha lista de tarefas */}
          {list.map((item, index) => (
            <ListItem />
          ))}


        </C.Area>
      </C.Container>
    </div>
  );
}

export default App;
