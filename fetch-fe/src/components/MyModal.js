import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
function MyModal() {
  const [show, setShow] = useState(true);
  const [value, setValue] = useState('Please submit feedback if you would like');

  const handleClose = () => {
    setShow(false);
  }

  const handleSubmit = () => {
    console.log(value);
    setShow(false);
  }
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <textarea value={value} onChange={() => setValue(value)}></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit feedback
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default MyModal

