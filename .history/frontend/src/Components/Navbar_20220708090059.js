import React from 'react';
import { Container, Navbar } from "react-bootstrap";


export default function Nav() {
  return (
    <div>
  <Navbar bg="dark" variant="dark">
    <Container>
    
    <Nav className="me-auto">
      <Nav.Link href="/">Add Agenda</Nav.Link>
      <Nav.Link href="/view">View/Edit Agenda</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
    </div>


  );
}

