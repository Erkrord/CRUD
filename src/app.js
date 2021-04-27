
const express = require('express');
const cors = require('cors');

const app = express();

// ==> Path to  API:
const index = require('./routes/index');
const eventRoute = require('./routes/event.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api/', eventRoute);

module.exports = app;

