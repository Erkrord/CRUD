//Search Event
const db = require("../config/database");
exports.searchEventByTag = async (req, res) => {
    const eventTag = req.params.tag;
    const response = await db.query("SELECT * FROM _event WHERE eventname LIKE  '%' || $1 || '%'", [eventTag]);
    res.status(200).send(response.rows);
    };