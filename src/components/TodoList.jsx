import ListItem from './ListItem'

const TodoList = ({ listItem, handleCheck, handleDelete, editBody, setEditBody, handleEdit, submitItem }) => {


    return (
        <div className="cardStyle">
            {listItem.map(item => (
                <ListItem
                    key={item.id}
                    submitItem={submitItem}
                    item={item}
                    listItem={listItem}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    handleCheck={handleCheck}
                    editBody={editBody}
                    setEditBody={setEditBody} />
            ))}
        </div>            
    )
}

export default TodoList
