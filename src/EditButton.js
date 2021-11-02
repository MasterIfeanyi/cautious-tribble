import { FaPen } from 'react-icons/fa'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal} from 'react-bootstrap'

const EditButton = ({ editBody, setEditBody, handleEdit, item, submitItem}) => {



  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
    return (
        <>
            <FaPen onClick={() => { handleShow(); handleEdit(item.id);}} />
             
                <Modal dialogClassName="modal-40w"
                show={show}
                onHide={handleClose}
                >
                <Modal.Header closeButton>
                    <Modal.Title>Edit To-do</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id="myform" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="text"
                            placeholder="Enter edit" 
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}
                        />
                    </form>
                    <button onClick={(e) => { handleClose(); }}>
                        Close
                    </button>
                    <button onClick={(e) => { handleClose(); submitItem(item.id);}}>
                        Save Changes
                    </button>
                </Modal.Body>
            </Modal>
            
        </>
    )
}

export default EditButton
