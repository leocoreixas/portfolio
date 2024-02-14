import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav, Carousel, Card } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Button from 'react-bootstrap/Button';
import ModalMedium from './ModalMedium';

export const Projects = () => {
  const years = [2021, 2022, 2023, 2024];
  const projects = [
    {
      index: 0,
      title: "Business Startup 1",
      description: "Design & Development",
      details: "This is a project I worked on for a startup company. I was responsible for the design and development of the website.",
      imgUrl: projImg1,
      year: 2021,
    },
    {
      index: 1,
      title: "Business Startup 2",
      description: "Design & Development",
      details: "This is a project I worked on for a startup company. I was responsible for the design and development of the website.",
      imgUrl: projImg2,
      year: 2021,
    },
    {
      index: 2,
      title: "Business Startup 3",
      description: "Design & Development",
      details: "This is a project I worked on for a startup company. I was responsible for the design and development of the website.",
      imgUrl: projImg3,
      year: 2021,
    },
    {
      index: 3,
      title: "Business Startup 4",
      description: "Design & Development",
      details: "This is a project I worked on for a startup company. I was responsible for the design and development of the website.",
      imgUrl: projImg1,
      year: 2022,
    },
    {
      index: 4,
      title: "Business Startup 5",
      description: "Design & Development",
      details: "This is a project I worked on for a startup company. I was responsible for the design and development of the website.",
      imgUrl: projImg2,
      year: 2023,
    },
    {
      index: 5,
      title: "Business Startup 6",
      description: "Design & Development",
      details: "This is a project I worked on for a startup company. I was responsible for the design and development of the website.",
      imgUrl: projImg3,
      year: 2024,
    },
  ];

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
                                  <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={project.imgUrl} />
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
