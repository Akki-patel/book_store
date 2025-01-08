const express = require('express');
const Book = require('./book.model');
const { postABook } = require('./book.controller');
const router  =  express.Router();
//post book'

//frontend ==> backend seever ==> controller ==> bookSchema ==> database ==> send data to server ==> back to frontend
// post when submit something from frontend to db
// get used when you want to get something
// put/patch used when you want to edit or updATE something
// delete used when you want to delete something

router.post ("/create-book",postABook)




module.exports = router;