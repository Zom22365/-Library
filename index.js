let myLibrary = [];
let formAddBook = document.getElementById("form-new-book");
let listBook =  document.getElementById("library-content");

class Book {
    constructor(title, author, pages, read) {
        this.title = title; 
        this.author = author; 
        this.pages = pages; 
        this.read = read; 
    }
}

function displayForm(){
    formAddBook.style.display = 'block';
    listBook.style.display = "none";
}

function addBookToLibrary() {
    event.preventDefault();
    formAddBook.style.display = 'none';
    listBook.style.display = "block";

    let title = document.getElementById("nameBook").value; 
    let author = document.getElementById("author").value; 
    let pages = document.getElementById("pages").value; 
    let read = document.getElementById("stateRead").checked; 
    newBook = new Book(title, author, pages,read);
    myLibrary.push(newBook); 
    document.getElementById("form").reset();
    createCard(newBook);
}

function createCard(newBook){
    const content = document.getElementById("library-content");
    const li =  document.createElement('li');
    li.setAttribute("class","card")

    const heading = document.createElement('h3');
    heading.innerHTML = "Book";

    const titleDiv = document.createElement('div');
    titleDiv.setAttribute("class","nameBook");
    titleDiv.innerHTML = "Name: " + newBook.title;

    const authDiv = document.createElement('div');
    authDiv.setAttribute("class","author");
    authDiv.innerHTML = "Author: " + newBook.author;

    const pageDiv = document.createElement('div');
    pageDiv.setAttribute("class","pages");
    pageDiv.innerText = "Pages: " + newBook.pages;

    const readBtn = document.createElement('button');
    readBtn.setAttribute("class","stateRead");
    
    if(newBook.read === "true"){
        readBtn.innerText = "Readed";
        readBtn.style.backgroundColor="#f43f5e";
    }else{
        readBtn.innerText = "Read";
        readBtn.style.backgroundColor="#22c55e";
    }

    readBtn.addEventListener("click",function(){
       if(newBook.read === "true"){
        readBtn.innerText = "Read";
        readBtn.style.backgroundColor = "#22c55e";
        newBook.read = "false";
       }else{
        readBtn.innerText = "Readed";
        readBtn.style.backgroundColor = "#f43f5e";
        newBook.read = "true";
       }
    });

    const removeBtn = document.createElement('button');
    removeBtn.setAttribute("class","removeBook");
    removeBtn.innerHTML = "Remove book";

    removeBtn.addEventListener("click",function(){
        for (let i = 0; i < myLibrary.length; i++){
            if(myLibrary[i] === newBook){
                let bookRemove = document.getElementsByClassName("card")[i];
                bookRemove.remove();
            }
        }
        myLibrary.splice(myLibrary.indexOf(newBook),1);
     });
    
    li.appendChild(heading);
    li.appendChild(titleDiv);
    li.appendChild(authDiv);
    li.appendChild(pageDiv);
    li.appendChild(readBtn);
    li.appendChild(removeBtn);
    content.appendChild(li);
}
