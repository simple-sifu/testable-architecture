import * as repository from "../../Books/BooksRepository";

// action
export const loadBooks = repository.loadBooks;

// selector
export const selectBooks = (state) => {
  const booksPm = repository.selectBooks(state);

  return booksPm
    ? booksPm.map((bookPm) => {
        const bookVm = {
          visibleName: bookPm.name
        };

        return bookVm;
      })
    : [];
};
