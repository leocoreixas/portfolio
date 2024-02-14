import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import pdfPathPt from "../assets/resume/resume_pt.pdf";
import pdfPathEn from "../assets/resume/resume_en.pdf";

export const Resume = () => {
  const [language, setLanguage] = useState("en");

  const handleDownload = () => {
    const pdfUrl = language === "pt" ? pdfPathPt : pdfPathEn;

    const anchorElement = document.createElement('a');
    anchorElement.href = pdfUrl;
    anchorElement.target = '_blank'; // Open the file in a new tab
    anchorElement.download = 'resume.pdf'; // Set the file name

    anchorElement.click();
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={8} xl={9}>
            <h3 className="text-resume">Download my Resumé to learn more about my qualifications:</h3>
          </Col>
          <Col md={4} xl={3} className="d-flex align-items-center">
            <select className="resume-select" onChange={(e) => setLanguage(e.target.value)}>
              <option value="en">EN</option>
              <option value="pt">PT</option>
            </select>
            <button className="resume-bx ms-2" onClick={handleDownload}>
              Download Resumé
            </button>
          </Col>
        </Row>
      </div>
    </Col>


  );
};
