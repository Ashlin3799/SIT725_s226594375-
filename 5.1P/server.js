const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve files from public folder
app.use(express.static("public"));

// Import Books routes
const booksRoute = require("./routes/books.routes");

// Mount Books routes
app.use("/api/books", booksRoute);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});