import React, { useState, useEffect } from "react";
import { Table, Modal, Form ,Button} from "react-bootstrap";
import axios from "axios";
function Viewform(props){
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
    const handleShow = (_id,title,description,status,date,time) => {
        setShow(true);
        setid(_id);
        seTitle(title);
        setDescription(description);
        setStatus(status);
        setStartDate(date);
        setTime(time);
      }

      useEffect(() =>{

        function getagenda(){
              axios.get("http://localhost:5000/agenda/").then((res) =>{
                setAgendatable(res.data);
                 console.log(res.data);
              }).catch((err) => {
                  alert(err.message);
              })
        }
          gettime();
         },[])

         function onDelete(_id){
            console.log(_id);
            axios.delete("http://localhost:5000/agenda/"+_id ).then((res) =>{
               alert('Deleted Successfully'); 
               window.location.reload();
           }).catch((err) => {
               alert(err.message);
           })
          }

          function update(){
            const newAgenda ={
                _id,title,description,status,date,time
            }
          
            axios.put("http://localhost:5000/agenda/"+_id,newAgenda).then(()=>{
                seTitle('');
                setDescription('');
                setStatus('');
                setStartDate('');
                setTime('');
              alert("Updated Successfully");
              window.location.reload();
            }).catch((err=>{
              alert(err)
            }))
          }


}
