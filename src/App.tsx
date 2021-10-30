import { useState } from 'react'
import * as C from './App.styles';
import './App.css';
import { Item } from './types/Item'
import { ListItem } from './components/ListItem'
import { AddArea } from './components/AddArea'

function App() {

  const [list , setList] = useState<Item[]>([
    {id: 1, name: 'Acordar 6 da manhã', done: true},
    {id: 2, name: 'Estudar react 8 AM', done: false}

  ])

  return (
    <div>
      <C.Container>
        <C.Area>
          <C.Header>Lista de tarefas</C.Header>
        
          {/* input da lista */}
          <AddArea />

          {/* listar minha lista de tarefas */}
          {list.map((item, index) => (
            <ListItem key={index} item={item}/>
          ))}

        </C.Area>
      </C.Container>
    </div>
  );
}

export default App;
