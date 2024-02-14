import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Coding from "../assets/img/coding.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Full Stack"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>{`Hi! I'm Leonardo Coreixas`} <span className="txt-rotate"  data-rotate='[ "Web Developer", "Full Stack" ]'><span className="wrap">{text}</span></span></h1>
                  <h4>Passionate about creating and developing web applications.</h4>
                  <p>
                    A seasoned Computer Science professional with a Bachelor's degree from the Federal Fluminense University (UFF). Having completed my undergraduate studies, I'm embarking on a new journey this year as I pursue a Master's degree in Emerging Technologies with a focus on Blockchain at UFF.
                  </p>
                  {/* Professional Background */}
                  <h3>Professional Background:</h3>
                  <p>
                    My career as a Software Developer has seen me thrive in various roles across different organizations. From leading projects to contributing to full-stack development and back-end systems, I've garnered extensive experience in navigating complex technological landscapes.
                  </p>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={Coding} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
