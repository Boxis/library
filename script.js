let myLibrary = [];

// Example books for array
const book1 = new Book ("Book A", "Author A", 123, "yes", 0);
const book2 = new Book ("Book B", "Author B", 123, "no", 1);
const book3 = new Book ("Book C", "Author C", 11223, "yes", 2);
const book4 = new Book ("Book D", "Author D", 11223, "yes", 3);

myLibrary.push(book1, book2, book3, book4);


function Book(title, author, pages, read, bookID) {
  // the constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.bookID = bookID;
}

let len = myLibrary.length;
let j = len;

function getBookInfo () { 
  const title_val = document.getElementById("title").value;
  const author_val = document.getElementById("author").value;
  const pages_val = document.getElementById("pages").value;
  const read_val = document.querySelector('input[name="read"]:checked').value;
  const bookID_val = j;
  const book = new Book(title_val, author_val, pages_val, read_val, bookID_val);

  myLibrary.push(book);

  dialog.close();

  j++;
  len = myLibrary.length;
  addBookToLibrary();
}


function addBookToLibrary () {
  // do stuff here
  document.querySelector('.library-area').innerHTML='';
  for (let i = 0; i < len; i++) {
    createLibCard(i);
  }
  // console.log(myLibrary);
}


function createLibCard (i) {
  const libraryArea = document.querySelector('.library-area');
  // console.log(libraryArea);
  
  // create a new div element
  const newDiv = document.createElement("div");
  newDiv.classList.add('book-card');
  newDiv.id = "book-" + i;

  const title = document.createElement('p');
  title.innerText = "Title: " + myLibrary[i].title;

  const author = document.createElement('p');
  author.innerText = "Author: " + myLibrary[i].author;

  const pages = document.createElement('p');
  pages.innerText = "Pages: " + myLibrary[i].pages;

  const read = document.createElement('p');
  read.id = "read";
  read.innerText = "Read: " + myLibrary[i].read;

  const bookID = myLibrary[i].bookID;

  var btnRead = document.createElement("button");
  btnRead.innerText = "Read?";
  btnRead.onclick = function(){
    if (read.innerText.includes("yes")) {
      read.innerText = "Read: " + "no";
    } else {
      read.innerText = "Read: " + "yes";
    }; return false;
  };

  var btnDel = document.createElement("button");
  btnDel.innerText = "Delete";
  btnDel.class = "delBtn";
  btnDel.onclick = function(){
    myLibrary = myLibrary.filter(book => book.bookID !==  bookID);
    newDiv.parentNode.removeChild(newDiv);
  }

  // add the text node to the newly created div
  newDiv.appendChild(title);
  newDiv.appendChild(author);
  newDiv.appendChild(pages);
  newDiv.appendChild(read);
  newDiv.appendChild(btnRead);
  newDiv.appendChild(btnDel);

  libraryArea.appendChild(newDiv);
}

addBookToLibrary();


const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("#close-btn");
const submitButton = document.querySelector("#submit-btn");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// Submit button stores values entered in form
submitButton.addEventListener('click', getBookInfo);

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});




