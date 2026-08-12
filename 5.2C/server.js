const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// MongoDB connection
const MONGO_URI = "mongodb://127.0.0.1:27017/booksDB";

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");

        app.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve frontend
app.use(express.static("public"));

// Books routes
const booksRoute = require("./routes/books.routes");

app.use("/api/books", booksRoute);