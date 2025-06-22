const myLibrary = []

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

const form = document.querySelector("#bookData")
form.addEventListener("submit", (event) => {
  event.preventDefault()
  const bookData = new FormData(form)
  const book = Object.fromEntries(bookData.entries())
  addBookToLibrary(book)
  containerDialog.close()
})