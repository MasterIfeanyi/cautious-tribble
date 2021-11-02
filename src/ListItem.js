import { FaRegTrashAlt} from 'react-icons/fa'
import EditButton from './EditButton'


const ListItem = ({listItem, item, handleCheck, handleDelete, editBody, setEditBody, handleEdit, submitItem }) => {
    return (
        <>
    <span id="li__span"
        style={item.checked ? { textDecoration: 'line-through' } : null}
        onClick={() => handleCheck(item.id)}>
            {item.newItem}
    </span>
            <EditButton handleEdit={handleEdit}
                submitItem={submitItem}
                item={item}
                listItem={listItem}
                editBody={editBody}
                setEditBody={setEditBody} />
        <FaRegTrashAlt onClick={() => handleDelete(item.id)} />  
        </>
    )
}

export default ListItem
