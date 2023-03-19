const sidebar = document.querySelector('.sidebar');
const grid = document.querySelector('.grid');
const buttonAddBook = document.querySelector('#addBook');
const buttonNewBook = document.querySelector('#newBook');

// references to input fields
let bookName = document.querySelector('#bookname');
let bookAuthor = document.querySelector('#bookauthor');
let bookPages = document.querySelector('#bookpages');

let myLibrary = [];

// object constructor for books
function Book(name, author, pages) {
    this.name = name
    this.author = author
    this.pages = pages
    this.info = `${this.name} by ${this.author}, ${this.pages} pages.`
}

function addBookToLibrary() {

}

function displayBooks() {
    for (i = 0; i < myLibrary.length; i++){
        grid.appendChild(document.createElement('div')).className = 'book';
    }
}

buttonNewBook.addEventListener('click', () => {
    let showForm = document.querySelector('.bookForm').style.display = 'flex';
});

myLibrary.push(1);
displayBooks();





