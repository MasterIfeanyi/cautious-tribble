// import Button from 'react-bootstrap/Button'
import { FaPlus } from 'react-icons/fa'
import {useRef} from 'react'

const TodoForm = ({ text, setText, handleSubmit }) => {

    const InputRef = useRef()

    return (
        <div>
            <form className="row" onSubmit={handleSubmit}>
                <div className="form-group col-12 d-flex">
                    <input type="text"
                        ref={InputRef}
                        placeholder="Enter To-do"
                        name=""
                        autoComplete="off"
                        required
                        className="form-control me-2 search-bar"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button
                        type="button"
                        className="btn btn-primary form-button"
                    >
                        <FaPlus />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm
