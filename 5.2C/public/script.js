document.addEventListener("DOMContentLoaded", () => {

    const getBooksBtn = document.getElementById("getBooksBtn");
    const booksList = document.getElementById("booksList");
    const bookDetails = document.getElementById("bookDetails");

    // Get all books
    getBooksBtn.addEventListener("click", () => {

        fetch("/api/books")
            .then(response => {

                if (!response.ok) {
                    throw new Error("Failed to fetch books");
                }

                return response.json();
            })
            .then(books => {

                booksList.innerHTML = "";
                bookDetails.innerHTML = "";

                books.forEach(book => {

                    const bookItem = document.createElement("div");

                    bookItem.classList.add("book-item");

                    bookItem.innerHTML = `
                        <span>${book.title}</span>
                        <span>${book.price} AUD</span>
                    `;

                    // Click book to get details
                    bookItem.addEventListener("click", () => {
                        getBookDetails(book.id);
                    });

                    booksList.appendChild(bookItem);
                });
            })
            .catch(error => {

                console.error("Error:", error);

                booksList.innerHTML = `
                    <p class="error">
                        Unable to load books.
                    </p>
                `;
            });
    });


    // Get one book
    function getBookDetails(id) {

        fetch(`/api/books/${id}`)
            .then(response => {

                if (!response.ok) {
                    throw new Error("Failed to fetch book");
                }

                return response.json();
            })
            .then(book => {

                bookDetails.innerHTML = `
                    <div class="details">

                        <h2>Book Details</h2>

                        <p>
                            <strong>Title:</strong>
                            ${book.title}
                        </p>

                        <p>
                            <strong>Author:</strong>
                            ${book.author}
                        </p>

                        <p>
                            <strong>Year:</strong>
                            ${book.year}
                        </p>

                        <p>
                            <strong>Genre:</strong>
                            ${book.genre}
                        </p>

                        <p>
                            <strong>Summary:</strong>
                            ${book.summary}
                        </p>

                        <p>
                            <strong>Price (AUD):</strong>
                            ${book.price}
                        </p>

                    </div>
                `;
            })
            .catch(error => {

                console.error("Error:", error);

                bookDetails.innerHTML = `
                    <p class="error">
                        Unable to load book details.
                    </p>
                `;
            });
    }

});