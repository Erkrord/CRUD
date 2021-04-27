// Create Event
const create = require("../models/create");
create.createEvent;
//Get All Events
const get = require("../models/get");
get.listAllEvents;
//Get Events By Id
const getByID = require("../models/getbyid");
getbById.findEventById;
//Update Event by Id
const update = require("../models/update");
update.updateEventById;
//Delete Event
const del = require("../models/delete");
del.deleteEventById;
//Search Events
 const search = require("../models/search");
 search.searchEventByTag;
//Get Events By QTY
const getByQty = require("../models/qty");
getByQty.getByEventQty;
//Paginate Events
const paginate = require("../models/paginate");
paginate.next;
//Palindrome
const palindrome = require("../models/palindrome");
palindrome.isPalindrome;
