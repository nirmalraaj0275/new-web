const express = require("express");
const router = express.Router();
const {
  allBook,
    newBook,
    createBook
  
} = require("../controllers/bookControl.js");


router.get("/", allBook); // All Book Route

router.get("/new", newBook); // New Book Route

router.post("/", upload.single("cover"), createBook); // Create Book Route


module.exports = router;