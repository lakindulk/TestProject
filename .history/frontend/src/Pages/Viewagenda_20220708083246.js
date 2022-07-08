import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Viewform from "../Components/Viewform";
import Viewformslide from "../Components/Viewformslide";


export default function Addform() {
    return (
        <div style={{ paddingTop: "1vh", paddingBottom: "1vh" }}>
            <Container>
                <Row>
                    <Col sm={6}>
                        <Viewformslide />
                    </Col>

                    <Col sm={6}>
                    <div style={{ paddingLeft:"5vh",paddingRight:"5vh"}}>

                        <Viewform />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}