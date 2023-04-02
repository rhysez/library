const sidebar = document.querySelector('.sidebar');
const grid = document.querySelector('.grid');
const buttonAddBook = document.querySelector('#addBook');
const buttonNewBook = document.querySelector('#newBook');
const buttonUpdate = document.querySelector('#update');
const form = document.querySelector('form');
const book = document.querySelector('.book');
const clear = document.querySelector("#clear");

let bookTitle = document.querySelector('#booktitle');
let bookAuthor = document.querySelector('#bookauthor')
let bookPages = document.querySelector('#bookpages');
let bookRead = document.querySelector('#bookread');

let myLibrary = [];
let bookStorage = [];

// makes form appear on page
buttonNewBook.addEventListener('click', () => {
    form.style.display = 'flex';
});

// takes input data from form and places into myLibrary[]
buttonAddBook.addEventListener('click', () => {
    bookStorage.push(bookTitle.value);
    addBookToLibrary();
})

// object constructor for books
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value);
    myLibrary.push(newBook);
    grid.appendChild(document.createElement('div')).className = 'book';
    grid.lastChild.textContent = bookTitle.value;
}

function submitForm(event){
    //Preventing page refresh
    event.preventDefault();
}

clear.addEventListener('click', () => {
    myLibrary = [];
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
      }
});

form.addEventListener('submit', submitForm);








