import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Image } from 'react-bootstrap';
import About2 from '../../images/citlaCover.jpg'


function MontModal() {
  const [Show, setShow] = useState(false);

  return (
    <>
 
      <Button onClick={() => setShow(true)}>Large modal</Button>
      <Modal
        //size="md"
        show={Show}
        onHide={() => setShow(false)}
        dialogClassName="modal-60w"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Image
         src={About2}
         />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MontModal;