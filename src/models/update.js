// Connect to DB
const db = require("../config/database");
//Update Models
exports.updateEventById = async (req, res)=> {
    const eventid = parseInt(req.params.id);
    const {eventname, eventdescription, eventtype, startdate, enddate} = req.body;
    const response = await db.query("UPDATE _event SET eventname = $1, eventdescription = $2, eventtype = $3, startdate = $4, enddate = $5 WHERE eventid = $6", [eventname, eventdescription, eventtype, startdate, enddate, eventid]); 
    res.status(200).send({message:'Իվենթը հաջողությամբ թարմացվել է'});
    };