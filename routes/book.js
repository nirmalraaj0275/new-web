const express = require("express");
const router = express.Router();
const {
  allBook,
    newBook,
    createBook
  
} = require("../controllers/bookControl.js");


router.get("/", allBook); 


router.get("/new", newBook); // New BOOK

router.post("/", createBook); // Create author route


module.exports = router;