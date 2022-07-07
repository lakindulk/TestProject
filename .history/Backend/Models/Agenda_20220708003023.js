//agenda
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const agendaSchema = new Schema({
    
    title : {
        type : String,
        required: true
    },

    description : {
        type: String,
        required: true
    },
    status : {
        type: String,
        required: true
    },
    date : {
        type: String,
        required: true
    }
    
    time : {
        type: String,
        required: true
    }
})

const Agenda = mongoose.model("Agenda",agendaSchema);

module.exports = Agenda;