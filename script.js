const sidebar = document.querySelector('.sidebar');
const grid = document.querySelector('.grid');
const buttonAddBook = document.querySelector('#addBook');
const buttonNewBook = document.querySelector('#newBook');
const form = document.querySelector('form');

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

// takes input data from form and places into myLibrary[]
buttonAddBook.addEventListener('click', () => {
    grid.appendChild(document.createElement('div')).className = 'book';
    let bookName = document.querySelector('#bookname');
    myLibrary.push(bookName.value);
})






