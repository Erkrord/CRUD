// Connect to DB
const db = require("../config/database");
// Create Event
exports.createEvent = async (req, res) => {
    const { eventname, eventdescription, eventtype, startdate, enddate } = req.body;
    const { rows } = await db.query(
      "INSERT INTO _event (eventname, eventdescription, eventtype, startdate, enddate) VALUES ($1, $2, $3, $4, $5 )",
      [eventname, eventdescription, eventtype, startdate, enddate]
    );
  
    res.status(201).send({
      message: "Իվենթը հաջողությամբ ավելացվել է",
      body: {
        product: { eventname, eventdescription, eventtype, startdate, enddate }
      },
    });
  };