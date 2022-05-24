import { FaPen } from 'react-icons/fa'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap'

const EditButton = ({ editBody, setEditBody, handleEdit, item, submitItem}) => {



  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
    return (
        <>
            <FaPen className="me-2" onClick={() => { handleShow(); handleEdit(item.id);}} />
             
            <Modal dialogClassName="modal-90w"
                show={show}
                onHide={handleClose}
                >
                <Modal.Header closeButton>
                    <Modal.Title>Edit To-do</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id="myform" onSubmit={(e) => { e.preventDefault(); submitItem(item.id)}}>
                        <div className="form-group d-flex">
                            <input
                                type="text"
                                className="form-control me-2"
                                placeholder="Enter edit"
                                value={editBody}
                                onChange={(e) => setEditBody(e.target.value)}
                            />
                            <button className="btn btn-primary">
                                submit
                            </button>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleClose()}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditButton


