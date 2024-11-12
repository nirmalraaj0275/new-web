const Author = require("../models/authors.js");




const  allBook = async (req, res) => {
    res.sent("ALL BOOK")
 
};

const newBook = (req, res) => {
    res.sent("NEW BOOK")
  
};

const createBook = async (req, res) => {
    res.sent("CREATE BOOK")
 
};

module.exports = {
    allBook,
    newBook,
    createBook
  
};