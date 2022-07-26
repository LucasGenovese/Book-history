const author = document.getElementById("author");
const title = document.getElementById("title");
const pages = document.getElementById("pages");
const read = document.getElementById("isRead");
const submit = document.getElementById("submit");
const bookList = document.getElementById("book-list");

let myLibrary = [];

function Book(author, title, pages, readStatus){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookHTML(author, title, pages){
    const book_div = document.createElement('div');
    book_div.classList.add("book");
    book_div.setAttribute('id',myLibrary.length);

    const new_author = document.createElement('b');
    new_author.innerHTML += author;

    const new_title = document.createElement('b');
    new_title.innerHTML += title;

    const new_pages = document.createElement('b');
    new_pages.innerHTML += pages;

    const new_check = document.createElement('input');
    new_check.setAttribute('type','checkbox');
    new_check.checked = checkRead();

    const new_button = document.createElement('button');
    new_button.textContent = "Remove";
    new_button.classList.add("remove");
    new_button.setAttribute('onClick', 'removeById(this.id)');
    new_button.setAttribute('id',myLibrary.length);

    book_div.appendChild(new_author);
    book_div.appendChild(new_title);
    book_div.appendChild(new_pages);
    book_div.appendChild(new_check);
    book_div.appendChild(new_button);

    bookList.appendChild(book_div);
}

function checkRead(){
    if (read.checked){
        return true;
    } else {
        return false;
    }
}

function addBookToLibrary(){
    readBoole = checkRead();
    myLibrary.push(new Book (author.value, title.value, pages.value, readBoole));
    addBookHTML(author.value, title.value, pages.value);
    console.log(myLibrary);
}

function removeById(clicked_id){
    console.log(clicked_id);
    const book_row = document.getElementById(clicked_id);

    book_row.remove(); // Removes from DOM
    delete myLibrary[clicked_id-1]; // Deletes from array but wont reindex
}

submit.addEventListener('click', ()=> {
    addBookToLibrary();
});

