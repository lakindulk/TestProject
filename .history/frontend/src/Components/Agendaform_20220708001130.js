import React from "react";
import { Button } from 'react-bootstrap';


export default function Home() {
  return (
    <div style={{paddingLeft:"2vh",paddingBottom:"15vh",paddingTop:"15vh"}}>
    <Card style={{ width: '58rem' }}>
    <Card.Body>
    <Form onSubmit={sendData}>
    </Form>
    </Card.Body>
    </Card>
    </div>
  );
}