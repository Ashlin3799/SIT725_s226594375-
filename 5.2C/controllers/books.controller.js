const booksService = require("../services/books.service");

// GET /api/books
const getAllBooks = async (req, res) => {
    try {
        const books = await booksService.getAllBooks();

        res.status(200).json(books);
    } catch (error) {
        console.error("Error getting books:", error);

        res.status(500).json({
            error: "Failed to retrieve books"
        });
    }
};

// GET /api/books/:id
const getBookById = async (req, res) => {
    try {
        const book = await booksService.getBookById(req.params.id);

        if (!book) {
            return res.status(404).json({
                error: "Book not found"
            });
        }

        res.status(200).json(book);
    } catch (error) {
        console.error("Error getting book:", error);

        res.status(500).json({
            error: "Failed to retrieve book"
        });
    }
};

module.exports = {
    getAllBooks,
    getBookById
};