import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Viewformslide from "../Components/Viewformslide";
import Viewform from "../Components/Viewform";


export default function Viewagenda() {
  return (
    <div style={{paddingTop:"1vh",paddingBottom:"1vh"}}>
      <Container>
        <Row>
          <Col><Viewformslide /></Col>
          <Col><Viewform /></Col>
        </Row>
      </Container>
    </div>
  );
}