import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#393E46', color: '#fff' }}>
      <Container>
        <Row className="py-3">
          <Col md={6}>
            <p>&copy;<strong>Avataar Assignment </strong></p>
          </Col>
          <Col md={6} className="d-flex justify-content-end align-items-center">
            <a
              href="https://github.com/anuragyadav20062002"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mr-3"
              style={{color: 'white',paddingRight: '20px'}}

            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/anurag-yadav-2002/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mr-3"
              style={{color: 'white', paddingRight: '20px'}}
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:anuragyadav20602@gmail.com"
              className="text-white"
              style={{color: 'white',paddingRight: '20px'}}
            >
              <FaEnvelope size={24} />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
