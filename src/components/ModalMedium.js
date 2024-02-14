import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalMedium = (props) => {
  console.log(props);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={true}
      style={{ color: "#121212" }}
      backdrop='static'
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Project started at {props.year}</h4>
        <h6>
          {props.description}
        </h6>
        <p>
          {props.details}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ backgroundColor: "#6549ad" }}
          onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalMedium;
