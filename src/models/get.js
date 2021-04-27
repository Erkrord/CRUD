// Connect to DB
const db = require("../config/database");
//Get all Events
exports.listAllEvents = async (req, res)=> {
    const response = await db.query('SELECT * FROM _event ORDER BY eventname ASC');
    res.status(200).send(response.rows);
    };