import ListItem from './ListItem'


const TodoList = ({ listItem, handleCheck, handleDelete, editBody, setEditBody, handleEdit, submitItem }) => {




    return (
        <div className="square">
            <ul className="ul">
                {listItem.map(item => (
                <li key={item.id} className="li">
                        <ListItem
                            submitItem={submitItem}
                            item={item}
                            listItem={listItem}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                            handleCheck={handleCheck}
                            editBody={editBody}
                            setEditBody={setEditBody} />
                </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
