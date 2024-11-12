const Author = require("../models/authors.js");

const homeAuthors = async (req, res) => {
  try {
    const authors = await Author.find();  
    res.render("authors/authors", { authors: authors });  
  } catch (error) {
    res.status(500).send("Error retrieving authors");
  }
};

const aboutUs = async(req,res)=>{
  res.render("authors/aboutus",{ errorMessage: null })
}

const getAuthors = async (req, res) => {
  let searchOption = {};   
  if (req.query.name != null && req.query.name !== "") {
    searchOption.name = new RegExp(req.query.name, "i");
  }
  try {
    const authors = await Author.find(searchOption);
    res.render("authors/search", { authors: authors, searchOption: req.query.name });
  } catch (error) {
    res.status(500).send("Error retrieving authors");
  }
};

const newAuthorForm = (req, res) => {
  res.render("authors/new", { errorMessage: null });
};

const createAuthor = async (req, res) => {
  const author = new Author({ name: req.body.name });
  try {
    await author.save();
    res.redirect("/authors");
  } catch (error) {
    res.render("authors/new", { errorMessage: "Error creating author" });
  }
};

module.exports = {
  getAuthors,
  newAuthorForm,
  createAuthor,
  aboutUs,
  homeAuthors
};