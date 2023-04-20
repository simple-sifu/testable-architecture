import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as presenter from "./BookListPresenter";

export default function BookListComponent() {
  const dispatch = useDispatch();
  const booksVm = useSelector(presenter.selectBooks);

  useEffect(() => {
    dispatch(presenter.loadBooks());
  }, []);

  return (
    <div>
      <h5 className="book-list-title">Book List (api)</h5>
      {booksVm.map((book, i) => {
        return <div key={i}>{book.visibleName}</div>;
      })}
    </div>
  );
}
