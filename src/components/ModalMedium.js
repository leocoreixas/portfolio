import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaAngular, FaDotCircle, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';

const ModalMedium = (props) => {
  const renderTechnologyIcons = () => {
    const technologies = props.tecnologies ? props.tecnologies : [];
    return technologies.map((tech, index) => {
      switch (tech) {
        case 'Angular':
          return <FaAngular key={index} style={{ marginRight: '5px' }} />;
        case '.NET':
          return <FaDotCircle key={index} style={{ marginRight: '5px' }} />;
        case 'Node.js':
          return <FaNodeJs key={index} style={{ marginRight: '5px' }} />;
        case 'React':
          return <FaReact key={index} style={{ marginRight: '5px' }} />;
        case 'Python':
          return <FaPython key={index} style={{ marginRight: '5px' }} />;
        case 'AWS':
          return <div key={index} className="technology-text">AWS</div>;
        case 'Azure':
          return <div key={index} className="technology-text">Azure</div>;
        case 'blockchain':
          return <div key={index} className="technology-text">Blockchain</div>;
        case 'AI':
          return <div key={index} className="technology-text">AI</div>;
        default:
          return null;
      }
    });
  };

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
        <div style={{ marginTop: '10px' }}>
          <p>Technologies used:</p>
          {renderTechnologyIcons()}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ backgroundColor: "#6549ad" }} onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalMedium;
