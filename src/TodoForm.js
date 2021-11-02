// import Button from 'react-bootstrap/Button'
import { FaPlus } from 'react-icons/fa'
import {useRef} from 'react'

const TodoForm = ({ text, setText, handleSubmit }) => {

    const InputRef = useRef()

    return (
        <form>
            <label htmlFor="to-do" id="label">Add To-do</label>
            <input type="text"
                ref={InputRef}
                placeholder="Enter To-do"
                name=""
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
                id="to-do" />
            <button
                type="button"
                onClick={handleSubmit}
                id="submit__button">
                <FaPlus/>
            </button>
        </form>
    )
}

export default TodoForm
