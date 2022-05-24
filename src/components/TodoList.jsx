import ListItem from './ListItem'

const TodoList = ({ listItem, handleCheck, handleDelete, editBody, setEditBody, handleEdit, submitItem }) => {


    return (
        <div className="row">
            {listItem?.length ? (
                <div className="col-12">
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
                    ))
                    }
                </div>
            ) : (
                <div className="row">
                    <div className="col-12">
                        <div className="li">
                            <p>You have not added a To-do</p>
                        </div>
                    </div>
                </div>
            )}
        </div>            
    )
}

export default TodoList
