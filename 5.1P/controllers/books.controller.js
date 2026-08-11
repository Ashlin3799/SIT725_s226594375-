const booksService = require("../services/books.service");

// GET /api/books
const getAllBooks = (req, res) => {
    try {
        const books = booksService.getAllBooks();

        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({
            error: "Failed to retrieve books"
        });
    }
};

// GET /api/books/:id
const getBookById = (req, res) => {
    try {
        const book = booksService.getBookById(req.params.id);

        if (!book) {
            return res.status(404).json({
                error: "Book not found"
            });
        }

        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({
            error: "Failed to retrieve book"
        });
    }
};

module.exports = {
    getAllBooks,
    getBookById
};