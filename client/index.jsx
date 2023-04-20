import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createStore from "./Core/CreateStore";
import HttpGateway from "./Core/HttpGateway";
import StatsComponent from "./Stats/StatsComponent";
import AddBookComponent from "./Books/AddBooks/AddBookComponent";
import BookListComponent from "./Books/BookList/BookListComponent";

function App() {
  const httpGateway = new HttpGateway();
  const store = createStore(httpGateway);

  return (
    <Provider store={store}>
      <div className="flex-row-container">
        <div className="flex-row-item">
          <AddBookComponent />
        </div>
        <div className="flex-row-item">
          <StatsComponent />
        </div>
        <div className="flex-row-item">
          <BookListComponent />
        </div>
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
