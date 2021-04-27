// Connect to DB
const db = require("../config/database");
//Paginate events
exports.next = async (req, res) => {
    const pageNumber = req.params.pn;
    const response = await db.query('SELECT * FROM _event ORDER BY eventid ASC OFFSET ($1 - 1) * 5 LIMIT 5', [pageNumber]);
    res.status(200).send(response.rows);
    };