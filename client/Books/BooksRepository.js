// action
export const addBook = (bookPm) => async (dispatch, getState, { http }) => {
    const dto = {
      name: bookPm.name,
      author: bookPm.author,
      ownerId: "pete@logicroom.co"
    };
    await http.post("https://api.logicroom.co/api/pete@logicroom.co/books", dto);
  
    await dispatch(loadBooks());
  
    dispatch({
      type: "BOOK_ADDED",
      payload: {
        lastBookAddedPm: bookPm
      }
    });
  };
  
  // action
  export const loadBooks = () => async (dispatch, getState, { http }) => {
    const dto = await http.get(
      "https://api.logicroom.co/api/pete@logicroom.co/books"
    );
  
    const booksPm = dto.result.map((dtoItem) => {
      return dtoItem;
    });
  
    dispatch({
      type: "BOOKS_LOADED",
      payload: {
        booksPm: booksPm
      }
    });
  };
  
  // selector
  export const selectBooks = (state) => {
    return state.booksState.booksPm;
  };
  
  // selector
  export const selectLastAddedBook = (state) => {
    return state.booksState.lastBookAddedPm;
  };
  
  export default function reducer(
    booksState = { booksPm: null, lastBookAddedPm: null },
    action = {}
  ) {
    switch (action.type) {
      case "BOOK_ADDED":
        return {
          ...booksState,
          lastBookAddedPm: action.payload.lastBookAddedPm
        };
      case "BOOKS_LOADED":
        return {
          ...booksState,
          booksPm: action.payload.booksPm
        };
      default:
        return booksState;
    }
  }
  