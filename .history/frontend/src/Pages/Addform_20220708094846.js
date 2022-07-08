import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Agendaform from "../Components/Agendaform";
import Addformslide from "../Components/Addformslide";
import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";


export default function Addform() {
  return (
    <div>
      <Navbar/>
    <div style={{paddingTop:"1vh",paddingBottom:"1vh"}}>
      <Container>
        <Row>
          <Col><Agendaform /></Col>
          <Col><Addformslide /></Col>
        </Row>
      </Container>
    </div>
    <Footer/>
    </div>
  );
}