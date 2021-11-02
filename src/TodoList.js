import { FaRegTrashAlt} from 'react-icons/fa'


const TodoList = ({ listItem, handleCheck, handleDelete }) => {
    return (
        <div className="square">
            <ul className="ul">
                {listItem.map(item => (
                    <li key={item.id} className="li"><span id="li__span"  style={ item.checked ? {textDecoration: 'line-through'} : null}  onClick={() => handleCheck(item.id)}>{item.newItem}</span><FaRegTrashAlt onClick={() => handleDelete(item.id)} /></li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
