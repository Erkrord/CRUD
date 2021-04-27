
const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'Թռու',
    message: 'CRUD Թեստ',
    version: '1.0',
  });
});

module.exports = router;

