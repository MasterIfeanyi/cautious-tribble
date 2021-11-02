import { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'


function App() {

  const [text, setText] = useState('')
  const [listItem, setListItem] = useState(JSON.parse(localStorage.getItem('To-do'))||[]);

  const addItem = (item) => {
    const id = listItem.length ? listItem[listItem.length - 1].id + 1 : 1;
    const newItem = item;

    const newData = { id, newItem }
    const newList = [...listItem, newData];

    console.log(newList);

    setListItem(newList);
    localStorage.setItem('To-do', JSON.stringify(newList));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!text) return
    addItem(text)
    setText('');
  }

  const handleCheck = (id) => {
    const item = listItem.map(item => item.id === id ? { ...item, checked: !item.checked } : item);
    setListItem(item)
    localStorage.setItem('To-do', JSON.stringify(item))
  }

  const handleDelete = (id) => {
    const items = listItem.filter(item => item.id !== id)
    setListItem(items)
    localStorage.setItem('To-do', JSON.stringify(items))
  }
  


  return (

    <div>
      <TodoForm text={text} setText={setText} handleSubmit={handleSubmit} />
      <TodoList listItem={listItem} handleCheck={handleCheck} handleDelete={handleDelete} />

    </div>
  );
}

export default App;
