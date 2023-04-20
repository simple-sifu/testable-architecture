import * as repository from "../Books/BooksRepository";

//selector
export const selectLastAddedBook = (state) => {
  const bookPm = repository.selectLastAddedBook(state);

  return bookPm ? bookPm.name : "";
};
