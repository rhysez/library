let myLibrary = [];

function Book(name, author, pages) {
    this.name = name
    this.author = author
    this.pages = pages
    this.info = `${this.name} by ${this.author}, ${this.pages} pages.`
}

const sidebar = document.querySelector('.sidebar');
const grid = document.querySelector('.grid');
const buttonAddBook = document.querySelector('#addBook');
buttonAddBook.addEventListener('click', () => {
    let askBook = prompt('Tell us the name of your new book:')
    if (askBook === ""){
        alert("Sorry, that was an invalid book name.")
        return;
    } else if (askBook === null) {
        return;
    }
    myLibrary.push(askBook);
    grid.appendChild(document.createElement('div')).className = 'book';
});

