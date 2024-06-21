import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import './MyNavbar.css';

const MyNavbar = () => {
  return (
    <Navbar expand="lg" fixed="top" className="navbar">
      <Container className="navbar-container">
        <Navbar.Brand as={Link} to="/">
          <img
            src="/nasa.png" /* Ruta del logo en la carpeta public */
            alt="Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <LinkContainer to="/foto">
              <Nav.Link>Foto del Día</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/mapa">
              <Nav.Link>Mapa Interactivo</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
