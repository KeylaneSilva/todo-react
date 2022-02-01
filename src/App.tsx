import { useState } from 'react'
import * as C from './App.styles';
import './App.css';
import { Item } from './types/Item'
import { ListItem } from './components/ListItem'
import { AddArea } from './components/AddArea'

function App() {

  const [list , setList] = useState<Item[]>([]);

  // função de adicionar tarefa na lista
  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList)
  }

  return (
    <div>
      <C.Container>
        <C.Area>
          <C.Header>Lista de tarefas</C.Header>
        
          {/* input da lista */}
          <AddArea onEnter={handleAddTask}/>

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
