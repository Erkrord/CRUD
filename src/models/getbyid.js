// Connect to DB
const db = require("../config/database");
//Get events by ID
exports.findEventById = async (req, res)=> {
    const eventId = parseInt(req.params.id);
    const response = await db.query('SELECT * FROM _event WHERE eventid = $1', [eventId]);
    res.status(200).send(response.rows);
    };
