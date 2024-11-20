class Book {
  constructor(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
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

  addBook(title, author, genre) {
    const newBook = new Book(title, author, genre);
    this.books.push(newBook);
  }

  displayBooks() {
    if (this.books.length === 0) {
      return "No books available.";
    }
    return this.books
      .map((book, index) => `${index + 1}. ${book.displayInfo()}`)
      .join("<br>");
  }
}

const libraries = {};

// Handle library form submission
document.getElementById("libraryForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const libraryName = document.getElementById("libraryName").value.trim();
  const add_library = document.getElementById("add_library");
  if (add_library) {
    add_library.classList = "d-none";
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
  const librarySelect = document.getElementById("library_header").textContent.toLowerCase();

  // libraries.libraryName.addBook(bookTitle , bookAuthor , bookGenre , true)
  console.log(librarySelect);

});
