import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { booksReducer } from "../Books/BooksRepository";

const rootReducer = combineReducers({
  booksState: booksReducer
});

export default (httpGateway) =>
  createStore(
    rootReducer,
    applyMiddleware(
      thunk.withExtraArgument({
        http: httpGateway
      })
    )
  );
