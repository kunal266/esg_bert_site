import {React,useState} from 'react'
import {Modal,Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

import MyDropzone from './uploader';
export default function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose} fullscreen={true}>
          <Modal.Header closeButton>
            <Modal.Title>Upload Files</Modal.Title>
          </Modal.Header>
          <Modal.Body>Get ESG Analysis on your file</Modal.Body>
          <Modal.Body>
          <MyDropzone/>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
