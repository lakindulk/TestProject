import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Viewform from "../Components/Viewform";
import Viewformslide from "../Components/Viewformslide";
import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";


export default function Addform() {
    return (
        <div>
            <Navbar />
            <div style={{ paddingTop: "1vh", paddingBottom: "1vh" }}>

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
            <Footer />
        </div>

    );
}