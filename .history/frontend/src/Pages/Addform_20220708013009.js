import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Agendaform from "../Components/Agendaform";
import Addformslide from "../Components/Addformslide";


export default function Addform() {
  return (
    <div style={{paddingTop:"3vh",paddingBottom:"3vh"}}>
      <Container>
        <Row>
          <Col><Agendaform /></Col>
          <Col><Addformslide /></Col>
        </Row>
      </Container>
    </div>
  );
}