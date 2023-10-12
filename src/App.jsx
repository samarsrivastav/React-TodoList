import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  let i=0;
  const [listItem, setListItem] = useState([]);
  const addlist=(inputText)=>{
    setListItem([...listItem,inputText]);
  }
  const dellist=(key)=>{
    let newList=[...listItem];
    newList.splice(key,1);
    setListItem([...newList]);
  }
  return (
    <>
      <TodoInput addlist={addlist}/>
      {listItem.map((listItem,i)=>{
        return(
          <TodoList item={listItem} index={i++} key={listItem}  dellist={dellist} />
        )
      })}
    </>
  )
}

export default App
