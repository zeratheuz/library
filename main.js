const myLibrary = []

addBookToLibrary("All-Star Superman", "Grant Morrison", "Frank Quitely", "12", true);
addBookToLibrary("V for Vendetta", "Alan Moore", "David Lloyd", "10", true);
addBookToLibrary("Flash Forward", "Scott Lobdell", "Brett Booth", "6", false);
addBookToLibrary("Batman: The Killing Joke", "Alan Moore", "Brian Bolland", "1", true);
addBookToLibrary("Lobo: The Last Czarnian", "Keith Giffen & Alan Grant", "Simon Bisley", "4", false);
addBookToLibrary("Green Lantern: Sinestro Corps War", "Geoff Johns & Dave Gibbons", "Ethan Van Sciver & Ivan Reis", "5", false);
addBookToLibrary("Wonder Woman #1", "Tom King", "Daniel Sampere", "1", false);
addBookToLibrary("Nightwing (2021)", "Tom Taylor", "Bruno Redondo", "30", false);
addBookToLibrary("Future State: Superman/Wonder Woman", "Dan Watters", "Leila Del Duca & Lucas Meyer", "2", false);
addBookToLibrary("Batman/Superman: World's Finest", "Mark Waid", "Dan Mora", "26", false);


function Book(title, author, artist, issues, read) {
  this.title = title,
    this.author = author,
    this.artist = artist,
    this.issues = issues,
    this.read = read,
    this.id = crypto.randomUUID()
}

function addBookToLibrary(title, author, artist, issues, read) {
  myLibrary.push(new Book(title, author, artist, issues, read))
}

function displayBooks() {
  const books = document.querySelector(".books")
  for (let i in myLibrary) {
    const book = document.createElement("div")
    book.setAttribute("class", "book")
    book.setAttribute("id", myLibrary[i].id)
    book.textContent = myLibrary[i].title
    books.appendChild(book)
  }
}

displayBooks()