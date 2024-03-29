import { Container, Row, Col } from "react-bootstrap";
import { ResumeForm } from "./ResumeForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <ResumeForm />
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href={process.env.REACT_APP_LINKEDIN}><img src={navIcon1} alt='linkedin' /></a>
                <a href={process.env.REACT_APP_GITHUB}><img src={navIcon2} alt='github' /></a>
                <a href={process.env.REACT_APP_INSTAGRAM}><img src={navIcon3} alt='instagram' /></a>
            </div>
            <p>Copyright {year}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
