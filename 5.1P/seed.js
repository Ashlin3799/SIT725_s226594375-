const { webcrypto } = require("crypto");
global.crypto = webcrypto;
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/bookDB")
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log(err);
});

// Create Schema
const BookSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String
});

// Create Model
const Book = mongoose.model("Book", BookSchema);

// Insert Books
const books = [
    {
        title: "The Merchant of Venice",
        image: "images/Book_1.jpg",
        link: "About The Merchant of Venice",
        description: "A famous play by William Shakespeare about love, friendship, money and justice."
    },
    {
        title: "Romeo and Juliet",
        image: "images/Book2.jpg",
        link: "About Romeo and Juliet",
        description: "A tragedy by William Shakespeare about two young lovers from rival families."
    },
    {
        title: "Hamlet",
        image: "images/Book3.jpg",
        link: "About Hamlet",
        description: "A tragedy by William Shakespeare about Prince Hamlet seeking revenge."
    }
];

// Save Books
Book.insertMany(books)
.then(() => {
    console.log("Books inserted successfully!");
    mongoose.connection.close();
})
.catch((err) => {
    console.log(err);
});