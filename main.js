const myLibrary = []

addBookToLibrary("All-Star Superman", "Grant Morrison", "Frank Quitely", "12", true);
// addBookToLibrary("V for Vendetta", "Alan Moore", "David Lloyd", "10", true);
// addBookToLibrary("Flash Forward", "Scott Lobdell", "Brett Booth", "6", false);
// addBookToLibrary("Batman: The Killing Joke", "Alan Moore", "Brian Bolland", "1", true);
// addBookToLibrary("Lobo: The Last Czarnian", "Keith Giffen & Alan Grant", "Simon Bisley", "4", false);
// addBookToLibrary("Green Lantern: Sinestro Corps War", "Geoff Johns & Dave Gibbons", "Ethan Van Sciver & Ivan Reis", "5", false);
// addBookToLibrary("Wonder Woman #1", "Tom King", "Daniel Sampere", "1", false);
// addBookToLibrary("Nightwing (2021)", "Tom Taylor", "Bruno Redondo", "30", false);
// addBookToLibrary("Future State: Superman/Wonder Woman", "Dan Watters", "Leila Del Duca & Lucas Meyer", "2", false);
// addBookToLibrary("Batman/Superman: World's Finest", "Mark Waid", "Dan Mora", "26", false);

function Book(title, author, artist, issues, read) {
  this.title = title,
    this.author = author,
    this.artist = artist,
    this.issues = issues,
    this.read = read,
    this.id = crypto.randomUUID()
}

function addBookToLibrary(object) {
  myLibrary.push(new Book(object.title, object.author, object.artist, object.issues, object.read))
  displayBooks()
}

function displayBooks() {
  const container = document.querySelector(".container")
  container.innerHTML = ''

  myLibrary.forEach(book => {
    const div = document.createElement("div")
    div.setAttribute("class", "book")
    div.setAttribute("id", book.id)

    div.innerHTML = `
      <p><b>Title: </b>${book.title}</p>
      <p><b>Author: </b>${book.author}</p>
      <p><b>Artist: </b>${book.artist}</p>
      <p><b>Issues: </b>${book.issues}</p>
      <p><b>read: </b>${book.read}</p>
      `

    container.appendChild(div)
  })
}

const newBook = document.querySelector("#newBook")
const closeDialog = document.querySelector("#closeDialog")
const containerDialog = document.querySelector("#containerDialog")

newBook.addEventListener("click", () => containerDialog.showModal())
closeDialog.addEventListener("click", () => containerDialog.close())