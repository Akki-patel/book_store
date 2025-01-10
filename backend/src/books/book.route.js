const express = require('express');
const Book = require('./book.model');
const { postABook, getAllBooks, getSingleBook, updateBookData, deleteBook } = require('./book.controller');
const router  =  express.Router();
//post book'

//frontend ==> backend seever ==> controller ==> bookSchema ==> database ==> send data to server ==> back to frontend
// post when submit something from frontend to db
// get used when you want to get something
// put/patch used when you want to edit or updATE something
// delete used when you want to delete something


// create book
router.post ("/create-book",postABook)

// get all book
router.get("/",getAllBooks)

//get single book
router.get("/:id",getSingleBook)

// Update a book endpoint
router.put("/edit/:id",updateBookData)

// delete a book 
router.delete("/:id",deleteBook)




module.exports = router;