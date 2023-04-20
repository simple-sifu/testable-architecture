import * as repository from "../../Books/BooksRepository";

// action
export const addBook = (name, author) => {
  const bookPm = { name, author };

  return repository.addBook(bookPm);
};
