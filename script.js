let myLibrary = [];

// Example books for array
const book1 = new Book ("Book A", "Author A", 123, "yes");
const book2 = new Book ("Book B", "Author B", 123, "no");
const book3 = new Book ("Book C", "Author C", 11223, "yes");
const book4 = new Book ("Book D", "Author D", 11223, "yes");

myLibrary.push(book1, book2, book3, book4);


function Book(title, author, pages, read) {
  // the constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


function getBookInfo () { 
  const title_val = document.getElementById("title").value;
  const author_val = document.getElementById("author").value;
  const pages_val = document.getElementById("pages").value;
  const read_val = document.querySelector('input[name="read"]:checked').value;
  const book = new Book(title_val, author_val, pages_val, read_val);

  myLibrary.push(book);

  dialog.close();

  len = myLibrary.length;
  addBookToLibrary();
}



function addBookToLibrary () {
  // do stuff here
  let bookCards = document.querySelectorAll('.book-card').length;
  console.log(bookCards);
  console.log(i);
  i = bookCards;
  console.log(i);

  for (; i < len; i++) {
    createLibCard(i);
  }
}


function createLibCard (i) {
  const libraryArea = document.querySelector('.library-area');
  console.log(libraryArea);
  
  // create a new div element
  const newDiv = document.createElement("div");
  newDiv.classList.add('book-card');
  // newDiv.id = "book-" + i;

  const title = document.createElement('p');
  title.innerText = "Title: " + myLibrary[i].title;

  const author = document.createElement('p');
  author.innerText = "Author: " + myLibrary[i].author;

  const pages = document.createElement('p');
  pages.innerText = "Pages: " + myLibrary[i].pages;

  const read = document.createElement('p');
  read.id = "read";
  read.innerText = "Read: " + myLibrary[i].read;

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
  btnDel.onclick = function(){
    newDiv.parentNode.removeChild(newDiv)
    delBooks = myLibrary.splice(i, 1);
    len = myLibrary.length;
    ; return false;
  };


  // add the text node to the newly created div
  newDiv.appendChild(title);
  newDiv.appendChild(author);
  newDiv.appendChild(pages);
  newDiv.appendChild(read);
  newDiv.appendChild(btnRead);
  newDiv.appendChild(btnDel);

  libraryArea.appendChild(newDiv);
}

let i = 0;
let len = myLibrary.length;
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
// submitButton.addEventListener("keypress" , function(e){ 
//   var key = e.which;
//   if(key == 13) {
//     getBookInfo();
//   }
// });

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});




