const sidebar = document.querySelector('.sidebar');
const grid = document.querySelector('.grid');
const buttonAddBook = document.querySelector('#addBook');
const buttonNewBook = document.querySelector('#newBook');
const form = document.querySelector('form');
const book = document.querySelector('.book');
const clear = document.querySelector("#clear");
const markRead = document.querySelector('.markRead');

let bookTitle = document.querySelector('#booktitle');
let bookAuthor = document.querySelector('#bookauthor')
let bookPages = document.querySelector('#bookpages');
let bookRead = document.querySelector('#bookread');

let myLibrary = [];

// makes form appear on page
buttonNewBook.addEventListener('click', () => {
    form.style.display = 'flex';
});

// takes input data from form and places into myLibrary[]
buttonAddBook.addEventListener('click', () => {
    addBookToLibrary();
})

// object constructor for books
function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages + " pages"
    this.read = false
    this.info = `This book is titled ${this.title} and is written by ${this.author}. It has ${this.pages}.`
}

function addBookToLibrary() {
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value);
    myLibrary.push(newBook);
    const bookCard = document.createElement('div');
    bookCard.classList.add('book');
    bookCard.textContent = `${bookTitle.value}`;
    grid.appendChild(bookCard);
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








