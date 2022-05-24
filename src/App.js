import { useState, useEffect } from 'react'
import Content from "./components/Content"
import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {

  useEffect(() => {
    setListItem(JSON.parse(localStorage.getItem('To-do')))
  }, [])

  const [text, setText] = useState('')
  const [editBody, setEditBody] = useState('')
  const [listItem, setListItem] = useState();

  const addItem = (item) => {
    const id = listItem?.length ? listItem[listItem.length - 1].id + 1 : 1;
    const newItem = item;

    const newData = { id, newItem }
    const newList = [...listItem, newData];

    console.log(newList);

    setListItem(newList);
    localStorage.setItem('To-do', JSON.stringify(newList));
  }


  const handleEdit = (id) => {
    const item = listItem.find(item => item.id === id)
    setEditBody(item.newItem);
  }

  const submitItem = (id) => {
    const updatedItem = { id: id, newItem: editBody }
    setListItem(listItem.map(item => item.id === id ? { ...updatedItem } : item))
    localStorage.setItem('To-do', JSON.stringify(updatedItem));
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
    <main className="App">
      <Header />
      <Content 
        submitItem={submitItem}
        text={text}
        editBody={editBody}
        setEditBody={setEditBody}
        listItem={listItem}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        setText={setText}
        handleSubmit={handleSubmit}
      />
      <Footer />
    </main>
  );
}

export default App;
