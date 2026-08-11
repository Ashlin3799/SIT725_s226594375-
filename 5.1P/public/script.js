document.addEventListener("DOMContentLoaded", () => {

    fetch("/api/books")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch books");
            }

            return response.json();
        })
        .then(books => {

            const booksContainer =
                document.getElementById("books-container");

            booksContainer.innerHTML = "";

            books.forEach(book => {

                const bookElement = document.createElement("div");

                bookElement.classList.add("book");

                bookElement.innerHTML = `
                    <h2>${book.title}</h2>
                    <p><strong>Author:</strong> ${book.author}</p>
                `;

                booksContainer.appendChild(bookElement);
            });
        })
        .catch(error => {

            console.error("Error:", error);

            document.getElementById("books-container").innerHTML = `
                <p class="error">
                    Unable to load books.
                </p>
            `;
        });

});