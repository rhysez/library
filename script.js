const sidebar = document.querySelector('.sidebar');
const grid = document.querySelector('.grid');
const buttonAddBook = document.querySelector('#addBook');
const buttonNewBook = document.querySelector('#newBook');
const buttonUpdate = document.querySelector('#update');
const form = document.querySelector('form');

let bookTitle = document.querySelector('#booktitle');
let bookAuthor = document.querySelector('#bookauthor')
let bookPages = document.querySelector('#bookpages');

let myLibrary = [];
let bookStorage = [];

buttonNewBook.addEventListener('click', () => {
    form.style.display = 'flex';
});

// takes input data from form and places into myLibrary[]
buttonAddBook.addEventListener('click', () => {
    grid.appendChild(document.createElement('div')).className = 'book';
    grid.lastChild.textContent = bookTitle.value;
    bookStorage.push(bookTitle.value);
    addBookToLibrary();
})

// object constructor for books
function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}

function addBookToLibrary() {
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value);
    myLibrary.push(newBook);
}

function displayBooks() {
    for (i = 0; i < myLibrary.length; i++){
        grid.appendChild(document.createElement('div')).className = 'book';
    }
}

function submitForm(event){
    //Preventing page refresh
    event.preventDefault();
}

form.addEventListener('submit', submitForm);








