import React, { useState } from 'react'; // Import useState from React
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Input from './inputFrom';
import { Modal, Button } from 'react-bootstrap'; // Import Bootstrap Modal components

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const checkLogin = () => {
    setIsOpen(true); // Open the modal when login button is clicked
  };

  const closeModal = () => {
    setIsOpen(false); // Close the modal
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Food Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">My Recipes</Nav.Link>
            <Nav.Link href="#link">Favorites</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <div>
        <button className="btn login-btn" onClick={checkLogin}>Login</button>
      </div>

      {/* Modal for Login */}
      <Modal show={isOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input/> {/* Render InputForm inside the modal */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary">
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}

export default NavbarComponent;



