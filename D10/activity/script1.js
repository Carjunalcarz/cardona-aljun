class Book {
  constructor(title, author, genre, borrowed = false) {
    this.title = String(title); // Ensures title is a string
    this.author = String(author); // Ensures author is a string
    this.genre = String(genre); // Ensures genre is a string
    this.borrowed = borrowed;
  }

  displayInfo() {
    return `${this.title} by ${this.author} (${this.genre})`;
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(title, author, genre, borrowed) {
    const newBook = new Book(title, author, genre, borrowed);
    this.books.push(newBook);
  }
  displayBooks() {
    if (this.books.length === 0) {
      return `
        <tr>
          <td colspan="4">No books available.</td>
        </tr>
      `;
    }

    return this.books
      .map((book, index) => {
        // Check if the book is not borrowed
        if (!book.borrowed) {
          return `
            <tr>
              <td>${index + 1}</td>
              <td>${book.title}</td>
              <td>${book.author}</td>
              <td>${book.genre}</td>
              <td><button class="btn btn-success" id="borrow-btn-${index}" onclick="">Borrow</button></td>
            </tr>
          `;
        }
        return ""; // Exclude borrowed books
      })
      .join(""); // Join all rows into a single string
  }

  borrowedBooks() {
    if (this.books.length === 0) {
      return `
        <tr>
          <td colspan="4">No books available.</td>
        </tr>
      `;
    }

    return this.books
      .map((book, index) => {
        // Check if the book is not borrowed
        if (book.borrowed) {
          return `
            <tr>
              <td>${index + 1}</td>
              <td>${book.title}</td>
              <td>${book.author}</td>
              <td>${book.genre}</td>
              <td><button class="btn btn-danger" id="return-btn-${index}" onclick="">Return</button></td>
              </tr>
          `;
        }
        return ""; // Exclude borrowed books
      })
      .join(""); // Join all rows into a single string
  }
}

const libraries = {};

// Handle library form submission
document.getElementById("libraryForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const libraryName = document.getElementById("libraryName").value.trim();
  const add_library = document.getElementById("add_library");
  const bookForm = document.getElementById("bookForm");
  if (add_library) {
    add_library.classList = "d-none";
    bookForm.classList.remove("d-none");
    bookForm.classList.add("d-show");
  }

  if (!libraryName) {
    alert("Library name cannot be empty!");
    return;
  }

  if (libraries[libraryName]) {
    alert(`The library "${libraryName}" already exists.`);
    return;
  }

  libraries[libraryName] = new Library(libraryName);

  const libraryList = document.getElementById("libraryList");
  const listItem = document.createElement("li");

  listItem.className = "list-group-item";

  listItem.innerHTML = `<strong>${libraryName}</strong><br><small>Books:</small><div id="${libraryName}-books">No books available.</div>`;
  const librarySelect = document.getElementById("library_header");
  const option = document.createElement("h2");
  option.value = libraryName;
  option.textContent = libraryName.toUpperCase();
  librarySelect.appendChild(option);
  document.getElementById("libraryName").value = "";
  alert(`Library "${libraryName}"added successfully!`);
});

// Handle library form submission
document.getElementById("bookForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Retrieve values from form inputs
  const bookTitle = document.getElementById("bookTitle").value;
  const bookAuthor = document.getElementById("bookAuthor").value;
  const bookGenre = document.getElementById("bookGenre").value;

  const librarySelect = document
    .getElementById("library_header")
    .textContent.trim()
    .toLowerCase();

  libraries[librarySelect].addBook(bookTitle, bookAuthor, bookGenre);
  const book = libraries[librarySelect].displayBooks();
  const borrowed_books = libraries[librarySelect].borrowedBooks();
  document.getElementById("book_table").innerHTML = book;
  document.getElementById("borrowed_table").innerHTML = borrowed_books;
  e.target.reset();
  // Add event listeners for the new borrow buttons
  addBorrowButtonListeners(librarySelect);
});

// Function to handle borrow button click and update book status
function handleBorrowButtonClick(index) {
  const librarySelect = document
    .getElementById("library_header")
    .textContent.trim()
    .toLowerCase();
  const library = libraries[librarySelect];

  if (library && library.books[index]) {
    library.books[index].borrowed = true;

    // Re-render the books table after updating
    const bookTable = library.displayBooks();
    const borrowedBooksTable = library.borrowedBooks();
    document.getElementById("book_table").innerHTML = bookTable;
    document.getElementById("borrowed_table").innerHTML = borrowedBooksTable;

    // Reattach event listeners for the new "Borrow" buttons
    addBorrowButtonListeners(librarySelect);
    addReturnButtonListeners(librarySelect);
  }
}

// Function to add event listeners to borrow buttons
function addBorrowButtonListeners(librarySelect) {
  const library = libraries[librarySelect];
  library.books.forEach((book, index) => {
    const button = document.getElementById(`borrow-btn-${index}`);
    if (button && !book.borrowed) {
      button.addEventListener("click", () => handleBorrowButtonClick(index));
    }
  });
}

// Function to handle borrow button click and update book status
function handleReturnButtonClick(index) {
  const librarySelect = document
    .getElementById("library_header")
    .textContent.trim()
    .toLowerCase();
  const library = libraries[librarySelect];

  if (library && library.books[index]) {
    library.books[index].borrowed = false;

    // Re-render the books table after updating
    const bookTable = library.displayBooks();
    const borrowedBooksTable = library.borrowedBooks();
    document.getElementById("book_table").innerHTML = bookTable;
    document.getElementById("borrowed_table").innerHTML = borrowedBooksTable;

    // Reattach event listeners for the new "Borrow" buttons
    addBorrowButtonListeners(librarySelect);
    addReturnButtonListeners(librarySelect);
  }
}

// Function to add event listeners to return buttons
function addReturnButtonListeners(librarySelect) {
  const library = libraries[librarySelect];
  library.books.forEach((book, index) => {
    const button = document.getElementById(`return-btn-${index}`);
    if (button && book.borrowed) {
      button.addEventListener("click", () => handleReturnButtonClick(index));
    }
  });
}
