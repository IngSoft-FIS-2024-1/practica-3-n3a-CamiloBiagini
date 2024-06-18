import {describe, it, expect, beforeEach} from '@jest/globals';
import Book from '../book.js';

describe('Book', () => {
  let myBook;
  let bookAnonimo;

  beforeEach(() => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 100, 4000);
    bookAnonimo = new Book('Cuentos de la Selva', '', 350, 4000);
  });

  it('return the correct number of words', () => {
    expect(myBook.getWords()).toBe(4000);
  });

  it('return the correct title', () => {
    expect(myBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('return the correct author', () => {
    expect(myBook.getAuthor()).toBe('Horacio Quiroga');
  });

  it('return the correct number of pages', () => {
    expect(myBook.getPages()).toBe(100);
  });

  it('check words param is a number', () =>{
    expect(() => myBook = new Book('Libro Prueba', 'Camilo Rodriguez', 350, 'Paginas')).toThrow();
  });

  it('check title is a string', () => {
    expect(() => myBook = new Book(451, 1, 350, 3)).toThrow();
  });
  it('check words not < 1', () => {
    expect(() => myBook = new Book('Libro Prueba', 'Camilo Rodriguez', 350, 0)).toThrow();
  });

  it('check title is not empty', () => {
    expect(() => myBook = new Book('', 'Horacio Quiroga', 350, 4000)).toThrow();
  });

  it('check author anonimo', () =>{
    expect(bookAnonimo.getAuthor()).toBe("Anónimo");
  })

  it('check author is a string', () => {
    expect(() => myBook = new Book('451', 1, 350, 3)).toThrow();
  });

  it('check page param is a number', () => {
    expect(() => myBook = new Book('Libro Prueba', 'Camilo Rodriguez', 'Paginas', 'Palabras')).toThrow();
  });

  it('check pages not < 1', () => {
    expect(() => myBook = new Book('Libro Prueba', 'Camilo Rodriguez', 0, 1000)).toThrow();
  });
  it('toString()', () => {
    expect(myBook.toString()).toBe('Título: Cuentos de la Selva Autor: Horacio Quiroga Páginas: 100 Palabras: 4000');
  });
  it('words per page functioning',() =>{
    expect(myBook.wordsPerPage()).toBe(40);
  } )

  it('Check pages lower than words', () =>{
    expect(() => myBook = new Book('Libro Prueba', 'Camilo Rodriguez', 100, 2)).toThrow();
  })
});
