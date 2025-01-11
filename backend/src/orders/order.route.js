const express = require('express');
const { createAorder, getOrderByEmail } = require('./order.controller');
const router  =  express.Router();

// create a order endpoint
router.post("/",createAorder)

// get order by user email
router.get("/email/:email",getOrderByEmail)


module.exports =router;

