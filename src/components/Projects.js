import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav, Carousel, Card } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Button from 'react-bootstrap/Button';
import ModalMedium from './ModalMedium';
import projects  from '../helpers/projects/projects';

export const Projects = () => {
  const years = [2021, 2022, 2023, 2024];


  const [activeYear, setActiveYear] = useState(years[0]);
  const [activeModal, setActiveModal] = useState(null); 

  const handleCarouselSelect = (selectedIndex, e) => {
    setActiveYear(years[selectedIndex]);
  };

  const handleShowModal = (projectIndex) => {
    setActiveModal(projectIndex); 
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Here are some of my projects</p>
                  <Tab.Container
                    id="projects-tabs"
                    defaultActiveKey={`first-${years[0]}`}
                    activeKey={`first-${activeYear}`}
                  >
                    <Carousel onSelect={handleCarouselSelect}>
                      {years.map((year, index) => (
                        <Carousel.Item key={index}>
                          <Nav
                            variant="pills"
                            className="nav-pills mb-5 justify-content-center align-items-center"
                            id={`pills-tab-${year}`}
                          >
                            <Nav.Item>
                              <Nav.Link eventKey={`first-${year}`}>
                                {year}
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </Carousel.Item>
                      ))}
                    </Carousel>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible
                          ? "animate__animated animate__slideInUp"
                          : ""
                      }
                    >
                      {years.map((year, index) => (
                        <Tab.Pane eventKey={`first-${year}`} key={index}>
                          <Row>
                            {projects
                              .filter((project) => project.year === year)
                              .map((project, projectIndex) => (
                                <Col md={6} lg={4} key={projectIndex}>
                                  <Card style={{ width: '20rem'}}>
                                    <Card.Img style={{maxHeight: '200px'}} variant="top" src={project.imgUrl} />
                                    <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                      <Card.Text>
                                        {project.title}
                                      </Card.Text>
                                      <Button
                                        style={{ backgroundColor: "#6549ad" }}
                                        onClick={() => handleShowModal(project.index)}
                                      >
                                        See more details
                                      </Button>
                                    </Card.Body>
                                  </Card>
                                  <ModalMedium
                                    show={activeModal === project.index} // Show modal if its index matches the activeModal
                                    onHide={handleCloseModal}
                                    title={project.title}
                                    description={project.description}
                                    year={project.year}
                                    details={project.details}
                                    tecnologies={project.technologies}
                                  />
                                </Col>
                              ))}
                          </Row>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      ></img>
    </section>
  );
};
