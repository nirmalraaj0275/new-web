const Author = require("../models/authors.js");


const  allBook = async (req, res) => {
    res.send("ALL BOOK")
 
};

const newBook = (req, res) => {
    res.send("NEW BOOK")
  
};

const createBook = async (req, res) => {
    res.send("CREATE BOOK")
 
};

module.exports = {
    allBook,
    newBook,
    createBook
  
};