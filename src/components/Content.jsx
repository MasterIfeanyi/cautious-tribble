import React from 'react'
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

const Content = ({text, setText, handleSubmit, editBody, submitItem, setEditBody, listItem, handleCheck, handleDelete, handleEdit}) => {
  return (
    <section className="section">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center my-3">
                    <h1 className="h1">Add To-do</h1>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-6">
                    <TodoForm
                        text={text}
                        setText={setText}
                        handleSubmit={handleSubmit}
                    />
                    <TodoList
                        submitItem={submitItem}
                        text={text}
                        editBody={editBody}
                        setEditBody={setEditBody}
                        listItem={listItem}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                    />
                </div>
            </div>
        </div>
    </section>     
  )
}

export default Content