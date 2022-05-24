import { FaRegTrashAlt} from 'react-icons/fa'
import EditButton from './EditButton'


const ListItem = ({
        listItem, item,
        handleCheck, handleDelete,
        editBody, setEditBody,
        handleEdit, submitItem
    }) => {
    
    return (
        <div className="li">
            <div
                id="li__span"
                style={item.checked ? { textDecoration: 'line-through' } : null}
                onClick={() => handleCheck(item.id)}
            >
                {item.newItem}
            </div>
            <div className="">
                <EditButton handleEdit={handleEdit}
                    submitItem={submitItem}
                    item={item}
                    listItem={listItem}
                    editBody={editBody}
                    setEditBody={setEditBody} />
                <FaRegTrashAlt onClick={() => handleDelete(item.id)} />  
            </div>
        </div>
    )
}

export default ListItem
