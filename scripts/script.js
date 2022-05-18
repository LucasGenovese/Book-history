const author = document.getElementById("author");
const title = document.getElementById("title");
const pages = document.getElementById("pages");
const read = document.getElementById("isRead");
const submit = document.getElementById("submit");

let myLibrary = [];

function Book(author, title, pages){
    this.author = author;
    this.title = title;
    this.pages = pages;
}

function addBookToLibrary(){
    myLibrary.push(new Book (author.value, title.value, pages.value));
    console.log(myLibrary);
}

submit.addEventListener('click', ()=> {
    addBookToLibrary();
});