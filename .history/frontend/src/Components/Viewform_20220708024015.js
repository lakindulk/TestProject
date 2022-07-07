import React, { useState, useEffect } from "react";
import { Table, Modal, Form, Button } from "react-bootstrap";

import axios from "axios";
function Viewform(props) {
    const [agendatable, setAgendatable] = useState([]);
    const [search, setSearch] = useState("");
    const [_id, setid] = useState(" ");
    const [title, seTitle] = useState(" ");
    const [description, setDescription] = useState(" ");
    const [status, setStatus] = useState(" ");
    const [date, setStartDate] = useState(new Date());
    const [time, setTime] = useState('10:00');

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (_id, title, description, status, date, time) => {
        setShow(true);
        setid(_id);
        seTitle(title);
        setDescription(description);
        setStatus(status);
        setStartDate(date);
        setTime(time);
    }

    useEffect(() => {

        function getagenda() {
            axios.get("http://localhost:5000/agenda/").then((res) => {
                setAgendatable(res.data);
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getagenda();
    }, [])

    function onDelete(_id) {
        console.log(_id);
        axios.delete("http://localhost:5000/agenda/" + _id).then((res) => {
            alert('Deleted Successfully');
            window.location.reload();
        }).catch((err) => {
            alert(err.message);
        })
    }

    function update() {
        const newAgenda = {
            _id, title, description, status, date, time
        }

        axios.put("http://localhost:5000/agenda/"+_id, newAgenda).then(() => {
            seTitle('');
            setDescription('');
            setStatus('');
            setStartDate('');
            setTime('');
            alert("Updated Successfully");
            window.location.reload();
        }).catch((err => {
            alert(err)
        }))
    }


    return (
        <div style={{ paddingBottom: "5vh", paddingTop: "5vh" }}>
            <center><h1>Agenda Table</h1></center>
            <div style={{ paddingLeft: "1vh", paddingBottom: "1vh", paddingTop: "1vh" }} >
                <a href="/">
                    <Button variant="secondary" >Add Agenda</Button>{' '}
                </a>
            </div>
            <div style={{ paddingLeft: "5vh", paddingBottom: "1vh", paddingTop: "1vh", paddingRight: "4vh" }}>
                <Table striped bordered hover >
                    <thead>

                        <input type="text" placeholder="Search time table 'Title' "
                            onChange={(e) => {
                                setSearch(e.target.value);
                            }} />

                        <tr>

                            <th>Title</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Edit</th>
                            <th>Delete</th>

                        </tr>
                    </thead>

                    <tbody>
                        {agendatable.filter(Agenda => {
                            if (search === "") {
                                return Agenda
                            }
                            else if (Agenda.title.toLowerCase().includes(search.toLowerCase())) {
                                return Agenda
                            }
                            return Agenda;

                        }).map((Agenda) => {

                                return (
                                    <tr key={Agenda._id}>
                                        <td>{Agenda.title}</td>
                                        <td>{Agenda.description}</td>
                                        <td>{Agenda.status}</td>
                                        <td>{Agenda.date}</td>
                                        <td>{Agenda.time}</td>

                                        <td>
                                            <Button variant="outline-success" onClick={() => handleShow(Agenda._id, Agenda.title, Agenda.description, Agenda.status, Agenda.date, Agenda.time)} >Edit</Button>
                                        </td>

                                        <td>
                                            <Button variant="outline-danger" onClick={() => onDelete(Agenda._id)}>Delete</Button>

                                        </td>
                                    </tr>

                                );
                            })}
                    </tbody>
                </Table>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form >
                            <div style={{ paddingBottom: "3vh", paddingTop: "1vh" }}>
                                <Form.Label>Title</Form.Label>
                                <Form.Control placeholder="title"
                                    value={title}
                                    onChange={(e) => seTitle(e.target.value)} />
                            </div>
                            <div style={{ paddingBottom: "3vh", paddingTop: "1vh" }}>

                                <Form.Label>Description</Form.Label >
                                <Form.Control as="textarea" rows={3} placeholder="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)} />
                            </div>

                            <div style={{ paddingBottom: "5vh", paddingTop: "1vh" }}>

                                <Form.Label>Status</Form.Label >
                                <Form.Control placeholder="status"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)} />
                            </div>

                            <div style={{ paddingBottom: "1vh", paddingTop: "2vh" }}>
                            <Form.Label>Date</Form.Label>
                            <Form.Control placeholder="date"
                                    value={date}
                                    onChange={(e) => setStartDate(e.target.value)} />                        </div>
                        <div style={{ paddingBottom: "1vh", paddingTop: "2vh" }}>
                            <Form.Label>Time</Form.Label><br />
                            <Form.Control placeholder="time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)} />                      </div>




                            <Button variant="outline-success" onClick={update}>Edit Timetables</Button>
                  
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>




        </div>
    );

}
export default Viewform;
