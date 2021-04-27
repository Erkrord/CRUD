// Connect to DB
const db = require("../config/database");
// Delete Event
exports.deleteEventById =async (req, res) => {
    const eventid = parseInt(req.params.id);
    await db.query('DELETE FROM _event WHERE eventid = $1',[eventid]);
    res.status(200).send({message:'Իվենթը հաջողությամբ հեռացված է', eventid});
    };