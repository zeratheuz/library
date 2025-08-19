const myLibrary = []

class Book {
  constructor(title, writer, artist, issues, isRead) {
    this.title = title,
      this.writer = writer,
      this.artist = artist,
      this.issues = issues,
      this.isRead = isRead,
      this.id = crypto.randomUUID(),
      this.isReadToggle = function () {
        this.isRead === "Yes" ? this.isRead = "No" : this.isRead = "Yes"
      }
  }
}

function addBookToLibrary(object) {
  myLibrary.push(new Book(object.title, object.writer, object.artist, object.issues, object.isRead))
  displayBooks()
  isRead()
}

function displayBooks() {
  const container = document.querySelector(".container")
  container.innerHTML = ''

  myLibrary.forEach(book => {
    const div = document.createElement("div")
    div.setAttribute("class", "book")
    div.setAttribute("id", book.id)

    div.innerHTML = `
    <button type="button" class="remove-button" data-bookid="${book.id}">x</button>
    <div>
      <p><b>Title: </b>${book.title}</p>
      <p><b>Writer: </b>${book.writer}</p>
      <p><b>Artist: </b>${book.artist}</p>
      <p><b>Issues: </b>${book.issues}</p>
      <p>
      <b>Read: </b>
      <button type="button" class="isRead-button" data-bookid="${book.id}">${book.isRead}</button>
      </p>
    </div>
      `

    container.appendChild(div)

    const removeButtons = document.querySelectorAll(".remove-button")
    removeButtons.forEach(button => {

      button.addEventListener("click", () => {
        const id = button.dataset.bookid
        const book = document.getElementById(id)

        if (book) {
          container.removeChild(book)

          const index = myLibrary.findIndex(book => book.id === id)
          myLibrary.splice(index, 1)
        }
      })
    })
  })
}

function isRead() {
  const isReadButtons = document.querySelectorAll(".isRead-button")
  isReadButtons.forEach(button => {

    button.addEventListener("click", () => {
      const id = button.dataset.bookid
      const book = myLibrary.find(book => book.id == id)

      book.isReadToggle()
      button.textContent = book.isRead
    })
  })
}

const newBook = document.querySelector("#newBook")
const closeDialog = document.querySelector("#closeDialog")
const containerDialog = document.querySelector("#containerDialog")

newBook.addEventListener("click", () => containerDialog.showModal())
closeDialog.addEventListener("click", () => containerDialog.close())

const form = document.querySelector("#bookData")
form.addEventListener("submit", (event) => {
  event.preventDefault()
  const bookData = new FormData(form)
  const book = Object.fromEntries(bookData.entries())
  addBookToLibrary(book)
  containerDialog.close()
})

addBookToLibrary({
  title: "All-Star Superman",
  writer: "Grant Morrison",
  artist: "Frank Quitely",
  issues: "12",
  isRead: "Yes"
});

addBookToLibrary({
  title: "V for Vendetta",
  writer: "Alan Moore",
  artist: "David Lloyd",
  issues: "10",
  isRead: "Yes"
});

addBookToLibrary({
  title: "Flash Forward",
  writer: "Scott Lobdell",
  artist: "Brett Booth",
  issues: "6",
  isRead: "No"
});

addBookToLibrary({
  title: "Batman: The Killing Joke",
  writer: "Alan Moore",
  artist: "Brian Bolland",
  issues: "1",
  isRead: "Yes"
});

addBookToLibrary({
  title: "Lobo: The Last Czarnian",
  writer: "Keith Giffen & Alan Grant",
  artist: "Simon Bisley",
  issues: "4",
  isRead: "No"
});

addBookToLibrary({
  title: "Green Lantern: Sinestro Corps War",
  writer: "Geoff Johns & Dave Gibbons",
  artist: "Ethan Van Sciver & Ivan Reis",
  issues: "5",
  isRead: "Yes"
});

addBookToLibrary({
  title: "Wonder Woman #1",
  writer: "Tom King",
  artist: "Daniel Sampere",
  issues: "1",
  isRead: "No"
});

addBookToLibrary({
  title: "Nightwing (2021)",
  writer: "Tom Taylor",
  artist: "Bruno Redondo",
  issues: "30",
  isRead: "Yes"
});

addBookToLibrary({
  title: "Future State: Superman/Wonder Woman",
  writer: "Dan Watters",
  artist: "Leila Del Duca & Lucas Meyer",
  issues: "2",
  isRead: "No"
});

addBookToLibrary({
  title: "Batman/Superman: World's Finest",
  writer: "Mark Waid",
  artist: "Dan Mora",
  issues: "26",
  isRead: "Yes"
});

addBookToLibrary({
  title: "Kingdom Come",
  writer: "Mark Waid",
  artist: "Alex Ross",
  issues: "4",
  isRead: "Yes"
});

addBookToLibrary({
  title: "Aquaman: The Trench",
  writer: "Geoff Johns",
  artist: "Ivan Reis",
  issues: "4",
  isRead: "No"
});