
const router          = require('express-promise-router')();
const modelCreate     = require('../models/create');
const modelDelete     = require('../models/delete');
const modelGet        = require('../models/get');
const modelGetById    = require('../models/getbyid');
const modelPaginate   = require('../models/paginate');
const modelUpdate     = require('../models/update');
const modelSearch     = require('../models/search');
const modelQty        = require('../models/qty');
const modelpalin      = require('../models/palindrome');

//Create event
router.post('/events', modelCreate.createEvent);
module.exports = router;
//Get All Events
router.get('/events',modelGet.listAllEvents);
//Get by ID
router.get('/events/id/:id', modelGetById.findEventById);
//Update Events
router.put('/events/:id', modelUpdate.updateEventById);
//Delete Event
router.delete('/events/:id', modelDelete.deleteEventById);
//Search
router.get('/events/:tag', modelSearch.searchEventByTag); 
//Paginate
router.get('/events/page/:pn', modelPaginate.next);
//Get by QTY
router.get('/events/q/:pag', modelQty.getByEventQty);
//Palindrome
router.get('/events/c/:pal', modelpalin.isPalindrome);