import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Alert from 'react-bootstrap/Alert';
//import sendEmail from "../services/send-email/send-email";


export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const validateForm = () => {
    if (!formDetails.firstName || !formDetails.lastName || !formDetails.email || !formDetails.phone || !formDetails.message) {
      return false;
    } else {
      return true;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    setLoading(true);

    try {
      debugger
      setFormDetails(formInitialDetails);
      const message = `Name: ${formDetails.firstName} ${formDetails.lastName} \nEmail: ${formDetails.email} \nPhone: ${formDetails.phone} \nMessage: ${formDetails.message}`;
      //const received = await sendEmail(formDetails.email, { message });

      if (true) {
        setStatus({ succes: true, message: 'Message sent successfully' });
      } else {
        setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
      }
      setButtonText("Send");
      setLoading(false);
    } catch (error) {
      setButtonText("Send");
      setLoading(false);
      setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
      return;

    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit" disabled={loading || !validateForm()}><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Alert
                          className="alert-button"
                          variant={status.succes ? 'success' : 'danger'}
                          onClose={() => setStatus({})}
                          dismissible
                          closeLabel="Close Alert"
                        >
                          <p>{status.message}</p>
                        </Alert>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
