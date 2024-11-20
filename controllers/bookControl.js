const Author = require("../models/authors.js");
const Book = require("../models/book.js");
const path = require("path")
const uploadPath = path.join("public", "uploads");
const multer = require("multer")
const imageMimeType = ["image/jpeg", "image/png", "image/gif"];
const upload = multer({
    dest: uploadPath,
    fileFilter: (req, file, callback) => {
        callback(null, imageMimeType.includes(file.mimetype)); // Validate MIME type
    },
});
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
    renderNewPage(res, new Book())
};


const createBook =  async (req, res) => {
        const fileName = req.fileName =! null ? req.file.fileName : null
        const book = new Book ({
            title : req.body.title,
            description : req.body.description,
            publishdate : req.body.publishdate,
            pageCount : req.body.pageCount,
            coverImage : fileName,
            author : req.body.author
        }) 
        try {
            const newBook = await book.save()
            //res.redirect("books/${newBook.id}")
            res.redirect("books")
        } catch (error) {
            renderNewPage(res, book, true)
        }

        async function renderNewPage(res, book , hasError = false){
            try {
                const authors = await Author.find();
                const params = {
                    authors: authors,
                    book: book
                }
                if (hasError) params.errorMessage =" Error in Creating"
                    res.render("books/new",params)
                
            } catch (error) {
                res.redirect("/books")
            }
        }

};

module.exports = {
    allBook,
    newBook,
    createBook
};