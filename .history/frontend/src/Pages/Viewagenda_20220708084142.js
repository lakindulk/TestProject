import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Viewform from "../Components/Viewform";
import Viewformslide from "../Components/Viewformslide";


export default function Addform() {
    return (
        <div style={{ paddingTop: "1vh", paddingBottom: "1vh" }}>
            <div style={{ paddingLeft: "1vh", paddingBottom: "1vh", paddingTop: "1vh" }} >
                <a href="/">
                    <Button variant="secondary" >Add Agenda</Button>{' '}
                </a>
            </div>
            <Container>
                <Row>
                    <Col sm={5}>
                        <Viewformslide />
                    </Col>

                    <Col sm={7}>

                        <Viewform />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}