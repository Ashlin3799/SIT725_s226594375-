const Book = require("../models/book.model");

// Get all books
const getAllBooks = async () => {
    const books = await Book.find({});

    return books.map(book => ({
        id: book.id,
        title: book.title,
        author: book.author,
        year: book.year,
        genre: book.genre,
        summary: book.summary,
        price: book.price.toString()
    }));
};

// Get one book by ID
const getBookById = async (id) => {
    const book = await Book.findOne({ id: id });

    if (!book) {
        return null;
    }

    return {
        id: book.id,
        title: book.title,
        author: book.author,
        year: book.year,
        genre: book.genre,
        summary: book.summary,
        price: book.price.toString()
    };
};

module.exports = {
    getAllBooks,
    getBookById
};