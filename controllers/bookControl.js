const Author = require("../models/authors.js");
const Book = require("../models/book.js");

 
const allBook = async (req, res) => {
    try {
        const books = await Book.find().populate("authors", "name"); // Changed variable to 'books'
        res.render("books/allBooks", { books }); // Passed 'books' to template
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).send("Error fetching books");
    }
};

const newBook = async (req, res) => {
    try {
        const authors = await Author.find();
        res.render("books/newbooks", { authors, book: new Book(), errorMessage: null }); // Changed 'Book' to 'book'
    } catch (error) {
        console.error(error);
        res.status(500).send("Error loading form");
    }
};


const createBook = async (req, res) => {
    try {
        const book = new book ({
            title : req.body.title,
            description : req.body.description,
            publishdate : req.body.publishdate,
            
        }) 
    } catch (error) {
        
    }

};

module.exports = {
    allBook,
    newBook,
    createBook
};