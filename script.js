const sidebar = document.querySelector('.sidebar');
const grid = document.querySelector('.grid');
const buttonAddBook = document.querySelector('#addBook');
const buttonNewBook = document.querySelector('#newBook');
const buttonUpdate = document.querySelector('#update');
const form = document.querySelector('form');

let bookName = document.querySelector('#bookname');
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
    grid.lastChild.textContent = bookName.value;
    bookStorage.push(bookName.value);
    addBookToLibrary();
})

// object constructor for books
function Book(name, author, pages) {
    this.name = name
    this.author = author
    this.pages = pages
}

function addBookToLibrary() {
    
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








