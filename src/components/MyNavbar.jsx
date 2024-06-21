import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import './MyNavbar.css';

const MyNavbar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" fixed="top" className="mb-3">
      <Container>
        <Navbar.Brand as={Link} to="/">Mi App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/foto">
              <Nav.Link>Foto del Día</Nav.Link>
            </LinkContainer>
          </Nav>
          <Button variant="outline-light" as={Link} to="/">Volver al principio</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
