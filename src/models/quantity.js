// Connect to DB
const db = require("../config/database");
//Get by quantity
exports.getByEventQty = async (req, res) => {
    const pagEvent = req.params.pag;
    const response = await db.query('SELECT * FROM _event ORDER BY eventname ASC LIMIT $1', [pagEvent]);
    res.status(200).send(response.rows);
    };