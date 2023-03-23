const sidebar = document.querySelector('.sidebar');
const grid = document.querySelector('.grid');
const buttonAddBook = document.querySelector('#addBook');
const buttonNewBook = document.querySelector('#newBook');
const buttonUpdate = document.querySelector('#update');
const form = document.querySelector('form');
const book = document.querySelector('.book');

let bookTitle = document.querySelector('#booktitle');
let bookAuthor = document.querySelector('#bookauthor')
let bookPages = document.querySelector('#bookpages');
let bookRead = document.querySelector('#bookread');
let bookFav = document.querySelector('#bookfav');

let myLibrary = [];
let bookStorage = [];

buttonNewBook.addEventListener('click', () => {
    form.style.display = 'flex';
});

// takes input data from form and places into myLibrary[]
buttonAddBook.addEventListener('click', () => {
    bookStorage.push(bookTitle.value);
    addBookToLibrary();
})

// object constructor for books
function Book(title, author, pages, fav, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.fav = fav
    this.read = read
}

function addBookToLibrary() {
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookFav.value, bookRead.value);
    myLibrary.push(newBook);
    grid.appendChild(document.createElement('div')).className = 'book';
    grid.lastChild.textContent = bookTitle.value;
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








