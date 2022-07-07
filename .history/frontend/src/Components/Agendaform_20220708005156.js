import React, { useState } from "react"
import { Form, Card, Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';


export default function Home() {
    const [title, seTitle] = useState(" ");
    const [description, setDescription] = useState(" ");
    const [status, setStatus] = useState(" ");
    const [date, setDate] = useState(" ");
    const [time, setTime] = useState(" ");

    const [startDate, setStartDate] = useState(new Date());
    const [value, onChange] = useState('10:00');


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
          setDate('');
          setTime('');

          window.location.Reload();
          
    
        }).catch((err)=>{
          alert("error");
        })
      }  
    return (
        <div style={{ paddingLeft: "2vh", paddingBottom: "15vh", paddingTop: "15vh" }}>
            <Card style={{ width: '58rem' }}>
                <Card.Body>
                    <Form>
                        <div style={{ paddingBottom: "1vh", paddingTop: "2vh" }}>
                            <Form.Label>Title</Form.Label>
                            <Form.Control placeholder="Enter the title"
                            />
                        </div>
                        <div style={{ paddingBottom: "1vh", paddingTop: "2vh" }}>
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter the description"
                            />
                        </div>
                        <div style={{ paddingBottom: "1vh", paddingTop: "2vh" }}>
                            <Form.Label>Status</Form.Label>
                            <Form.Control placeholder="Enter the status"
                            />
                        </div>
                        <div style={{ paddingBottom: "1vh", paddingTop: "2vh" }}>
                            <Form.Label>Date</Form.Label>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div style={{ paddingBottom: "1vh", paddingTop: "2vh" }}>
                            <Form.Label>Time</Form.Label><br/>
                            <TimePicker onChange={onChange} value={value} />
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