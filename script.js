let myLibrary = [];

// Example books for array
const book1 = new Book ("Book A", "Author A", 123, "yes", 0);
const book2 = new Book ("Book B", "Author B", 123, "no", 1);

myLibrary.push(book1, book2,);


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
  console.log('submitted');
  // event.preventDefault();
  const title_val = document.getElementById("title").value;
  const author_val = document.getElementById("author").value;
  const pages_val = document.getElementById("pages").value;
  const check_val = document.getElementById("read");  
  console.log(check_val.checked);
  if(check_val.checked == false) {
    read_val = "no";
  } else {
    read_val = "yes";
  }
  
  const bookID_val = j;
  const book = new Book(title_val, author_val, pages_val, read_val, bookID_val);

  myLibrary.push(book);

  j++;
  len = myLibrary.length;
  addBookToLibrary();

  document.getElementById("myForm").reset();
  // toggleReq ()
  dialog.close();
}


function addBookToLibrary () {
  // do stuff here
  document.querySelector('.library-area').innerHTML='';
  for (let i = 0; i < len; i++) {
    createLibCard(i);
  }
}


function createLibCard (i) {
  const libraryArea = document.querySelector('.library-area');

  // create a new div element
  const newDiv = document.createElement("div");
  newDiv.classList.add('book-card');
  newDiv.id = "book-" + i;

  const title = document.createElement('p');
  title.innerText = myLibrary[i].title;

  const author = document.createElement('p');
  author.innerText = "by: " + myLibrary[i].author;

  const pages = document.createElement('p');
  pages.innerText = myLibrary[i].pages + " pages";

  const read = document.createElement('p');
  read.id = "read";
  read.innerText = "Read: " + myLibrary[i].read;

  const bookID = myLibrary[i].bookID;

  const btnDiv = document.createElement("div");
  btnDiv.classList.add('btn-div');

  var btnRead = document.createElement("button");
  btnRead.innerText = "Read?";
  btnRead.onclick = function(){
    if (read.innerText.includes("yes")) {
      read.innerText = "Read: " + "no";
      myLibrary.find(book => book.bookID == bookID).read = 'no';
    } else {
      read.innerText = "Read: " + "yes";
      myLibrary.find(book => book.bookID == bookID).read = 'yes';
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
  btnDiv.appendChild(btnRead);
  btnDiv.appendChild(btnDel);
  newDiv.appendChild(btnDiv);


  libraryArea.appendChild(newDiv);
}

addBookToLibrary();


const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("#close-btn");
const submitButton = document.querySelector("#submit-btn");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  // toggleReq ()
  dialog.showModal();
});

// Submit button stores values entered in form
submitButton.addEventListener('click', (event) => {
  getBookInfo();
  event.preventDefault();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  document.getElementById("myForm").reset();
  dialog.close();
});


function toggleReq (){
  const inputs = document.querySelectorAll("input");
  for (const input of inputs) {
    input.toggleAttribute('required');
  }
}


