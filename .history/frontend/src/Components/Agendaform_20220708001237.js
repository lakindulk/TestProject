import React from "react";
import { Form ,Card, Button } from 'react-bootstrap';


export default function Home() {
  return (
    <div style={{paddingLeft:"2vh",paddingBottom:"15vh",paddingTop:"15vh"}}>
    <Card style={{ width: '58rem' }}>
    <Card.Body>
    <Form onSubmit={sendData}>
    <div style={{paddingBottom:"3vh",paddingTop:"1vh"}}> 
    
    
    </div>      
    </Form>
    </Card.Body>
    </Card>
    </div>
  );
}