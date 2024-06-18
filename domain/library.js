import Book from './book.js';

class Library {

  #name;
  #inventory = [];
  #totalWords;
  //#wordCount; Wordcount no esta mencionado en ningun lado, a charlar en el siguiente sprint planning

  constructor(name) {
    this.setName(name);
  }

  setName(name) {
    if (typeof (name) !== "string") {
      throw new Error()
    }
    name = name.trim();
    if (name.length === 0) {
      throw new Error()
    }
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  addBook(title, author, pages, words) {
    const newBook = new Book(title, author, pages, words);
    this.#inventory.push(newBook);
  }

  getInventory() {
    return this.#inventory;
  }

  totalBooks() {
    return this.#inventory.length;
  }

  totalWords() {
    var libros = this.getInventory();
    var totalPalabras = 0;
    libros.forEach(function (libro){
      totalPalabras += libro.getWords();
    });
    return totalPalabras;
  }
}

export default Library;
