import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Agendaform from "../Components/Agendaform";
import Addformslide from "../Components/Addformslide";


export default function Addform() {
  return (
    <div style={{paddingTop:"1vh",paddingBottom:"1vh"}}>
      <Container>
                <Row>
                    <Col sm={4}>sm=4</Col>

                    <Col sm={8}>sm=8</Col>
                </Row>
            </Container>
    </div>
  );
}