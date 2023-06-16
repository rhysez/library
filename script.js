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
    if (bookTitle.value === "" || bookAuthor.value === "" || bookPages.value === ""){
        return;
    } else {
        addBookToLibrary();
    }
})

// class constructor for books
class Book {
    constructor (title, author, pages){
        this.title = title
        this.author = author
        this.pages = pages + " pages"
        this.read = false
        this.info = `This book is titled ${this.title} and is written by ${this.author}. It has ${this.pages}.`
    }
}

function addBookToLibrary() {
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value);
    myLibrary.push(newBook);
    const bookCard = document.createElement('div');
    const markRead = document.createElement('div');
    bookCard.classList.add('book');
    bookCard.textContent = `${bookTitle.value}`;
    bookCard.addEventListener('click', () => {
        alert(newBook.info);
    })
    if (bookRead.value === "yes") {
        newBook.read = true;
        if (newBook.read = true) {
            bookCard.style.boxShadow = "10px 10px lightgreen";
            markRead.style.backgroundColor = "lightgreen";
        }
    }
    markRead.textContent = "✔️";
    markRead.classList.add('markRead');
    markRead.addEventListener('click', () => {
        event.stopPropagation();
        newBook.read = true;
        bookCard.style.boxShadow = "10px 10px lightgreen";
        markRead.style.backgroundColor = "lightgreen";
        alert("You have now read this book.");
    })
    grid.appendChild(bookCard);
    bookCard.appendChild(markRead);
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








