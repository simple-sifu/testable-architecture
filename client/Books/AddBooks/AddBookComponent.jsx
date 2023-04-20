import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as presenter from "./AddBookPresenter";

export default function AddBookComponent() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <div>
      <h5>Add Book (api)</h5>
      name : <br /> <input onKeyUp={(e) => setName(e.target.value)} />
      <br /> author : <br />{" "}
      <input onKeyUp={(e) => setAuthor(e.target.value)} />
      <br />
      <button onClick={() => dispatch(presenter.addBook(name, author))}>
        add book
      </button>
    </div>
  );
}
