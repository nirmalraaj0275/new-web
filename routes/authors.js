const express = require("express");
const router = express.Router();
const {
  getAuthors,
  newAuthorForm,
  createAuthor,
  aboutUs,
  homeAuthors,
  
} = require("../controllers/authorControl.js");

router.get("/", homeAuthors); // Home page route

router.get("/search", getAuthors); // Search route

router.get("/new", newAuthorForm); // New author form route

router.get("/aboutus", aboutUs);

router.post("/", createAuthor); // Create author route

module.exports = router;