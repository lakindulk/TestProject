import React, { useState } from "react"
import axios from "axios";
import { Form, Card, Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';


export default function Home() {
    const [title, seTitle] = useState(" ");
    const [description, setDescription] = useState(" ");
    const [status, setStatus] = useState(" ");


    const [date, setStartDate] = useState(new Date());
    const [time, setTime] = useState('10:00');


    function sendData(e){  
        if(!(description.trim().length > 5)){
          alert("Invalid 'description' value! Length must be grater than 5")
          return
      }else if(!(title.trim().length > 2)){
        alert("Invalid 'title' value! Title must be grater than length 2")
        return
    }
        e.preventDefault();
        
        const newAgenda ={
            title,
            description,
            status,
            date,
            time
        }
    
        axios.post("http://localhost:5000/agenda",newAgenda).then(()=>{
          ("Agenda added")
          seTitle('');
          setDescription('');
          setStatus('');
          setStartDate('');
          setTime('');

          
    
        }).catch((err)=>{
          alert("error");
        })
      }  
    return (
        <div style={{ paddingLeft: "2vh", paddingBottom: "15vh", paddingTop: "15vh" }}>
            <Card style={{ width: '58rem' }}>
                <Card.Body>
                    <Form onSubmit={sendData}>
                        <div style={{ paddingBottom: "1vh", paddingTop: "2vh" }}>
                            <Form.Label>Title</Form.Label>
                            <Form.Control placeholder="Enter the title"  onChange={(e) => seTitle(e.target.value)} 
                            />
                        </div>
                        <div style={{ paddingBottom: "1vh", paddingTop: "2vh" }}>
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter the description"  onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div style={{ paddingBottom: "1vh", paddingTop: "2vh" }}>
                            <Form.Label>Status</Form.Label>
                            <Form.Control placeholder="Enter the status" onChange={(e) => setStatus(e.target.value)}
                            />
                        </div>
                        <div style={{ paddingBottom: "1vh", paddingTop: "2vh" }}>
                            <Form.Label>Date</Form.Label>
                            <DatePicker selected={date} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div style={{ paddingBottom: "1vh", paddingTop: "2vh" }}>
                            <Form.Label>Time</Form.Label><br/>
                            <TimePicker onChange={setTime} value={time} />
                        </div>

                        <div style={{ paddingBottom: "1vh", paddingTop: "2vh" }}>
                            <Button variant="outline-success" type="submit">Add Agenda</Button>
                        </div>

                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}