const myLibrary = []

function Book(title, author, artist, issues, read) {
  this.title = title,
  this.author = author,
  this.artist = artist,
  this.issues = issues,
  this.read = read,
  this.id = crypto.randomUUID()
}

function addBookToLibrary() {

}