//agenda routes
const router = require("express").Router();
let Agenda = require("../models/Agenda");

//Backend post router
router.route("/").post((req,res)=>{  
    const title = req.body.title;
    const description = req.body.description;
    const status=req.body.status;
    const date=req.body.date;
    const time=req.body.time;

    const newAgenda = new Agenda({
        title,
        description,
        status,
        date,
        time
    })
    newAgenda.save().then(()=>{
        res.json("New Agenda Added")
    }).catch((err)=>{
        console.log(err);
    })

})

// Agenda get router
router.route("/").get((req,res)=>{
    Agenda.find().then((agenda)=>{
        res.json(agenda)
    }).catch((err)=>{
        console.log(err)
    })
})

//Agenda Put router
router.route("/:id").put(async (req,res) => {
    let userId = req.params.id;
    const { title,
        description,
        status,
        date,
        time} = req.body;

    const updateAgenda = {
        title,
        description,
        status,
        date,
        time
    }
    const update = await  Agenda.findByIdAndUpdate(userId, updateAgenda)
    .then(() => {
        res.status(200).send({status: "Agenda updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.messege});
    })
})

//Agenda delete router
router.route("/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await Agenda.findByIdAndDelete(userId)
    .then(() =>{
        res.status(200).send({status: "Agenda deleted"});
    }).catch((errr) => {
        console.log(err.messege);
        res.status(500).send({status: "Error with delete Agenda", error: err.messege});
    })
})


//Fetch selected agenda by ID
router.route("/:id").get(async (req, res) => {
    let userId = req.params.id;
    const agenda = await Agenda.findById(userId)
    .then((selectagenda) => {
        res.status(200).send({status: "Selected agenda fetched", selectagenda})
    }).catch(() => {
        console.log(err.messege);
        res.status(500).send({status: "Error with get agenda",error: err.messege});
    })
})

module.exports = router;
