const myLibrary = []

function Book(title, author, artist, pages, read) {
  this.title = title,
  this.author = author,
  this.artist = artist,
  this.pages = pages,
  this.read = read,
  this.id = crypto.randomUUID()
}

function addBookToLibrary() {

}