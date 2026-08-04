const { webcrypto } = require("crypto");
global.crypto = webcrypto;
var express = require("express");
var mongoose = require("mongoose");   // NEW

var app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
mongoose.connect("mongodb://127.0.0.1:27017/bookDB");
mongoose.connection.on("connected", () => {
    console.log("MongoDB Connected Successfully");
});

var port = process.env.PORT || 3000;
const BookSchema = new mongoose.Schema({

    title: String,

    image: String,

    link: String,

    description: String

});
const Book = mongoose.model("Book", BookSchema);
app.get("/api/books", async (req, res) => {

    try {

        const books = await Book.find({});

        res.json({
            statusCode: 200,
            data: books,
            message: "Success"
        });

    } catch (err) {

        res.status(500).json({
            statusCode: 500,
            message: err.message
        });

    }

});
app.listen(port, () => {
    console.log("App listening to: " + port);
});