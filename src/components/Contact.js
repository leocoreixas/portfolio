import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Alert from 'react-bootstrap/Alert';
import { Envelope, Whatsapp } from 'react-bootstrap-icons';


export const Contact = () => {
  const whatsappMessage = "Olá, %20vim%20pelo%20portifólio%20e%20gostaria%20de%20saber%20mais%20sobre!";
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
      setFormDetails(formInitialDetails);
      const message = `Name: ${formDetails.firstName} ${formDetails.lastName} \nEmail: ${formDetails.email} \nPhone: ${formDetails.phone} \nMessage: ${formDetails.message}`;
      //const received = await sendEmail(formDetails.email, { message });

      if (true) {
        setStatus({ succes: true, message: 'Message sent successfully!' });
      } else {
        setStatus({ succes: false, message: 'Something went wrong, please try again later!' });
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
                  <Row className="mb-3 align-items-center">
                    <Col xs={1} className="px-0">
                      <Envelope className="fs-4" />
                    </Col>
                    <Col xs={11} className="px-1">
                      <p className="mb-0">Send me a message:</p>
                      <a href="mailto:leonardocoreixas@gmail.com" className="contact-link">leonardocoreixas@gmail.com</a>
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col xs={1} className="px-0">
                      <Whatsapp className="fs-4" />
                    </Col>
                    <Col xs={11} className="px-1">
                      <p className="mb-0">Contact me:</p>
                      <a href={`https://wa.me/5521967329230?text=${whatsappMessage}`} className="contact-link">+55 21 96732 9230</a>
                    </Col>
                  </Row>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
