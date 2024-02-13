import React from "react";
import { Col, Row } from "react-bootstrap";
import pdfUrl from "../assets/resume/resume.pdf";

export const Newsletter = () => {
  const handleDownload = () => {

    const anchorElement = document.createElement('a');
    anchorElement.href = pdfUrl;
    anchorElement.target = '_blank'; // Open the file in a new tab
    anchorElement.download = 'resume.pdf'; // Set the file name

    anchorElement.click();
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row >
          <Col lg={12} md={9} xl={9}>
            <h3 className="text-resume" >Download my Resumé to learn more about my qualifications:</h3>
          </Col>
          <Col md={3} xl={3}>
            <button className="resume-bx" onClick={handleDownload}>
              Download Resumé
            </button>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
