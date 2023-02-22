import { createStore } from "redux";
import MovieReducer from "./reducer/MovieReducer";

const store = createStore(
    MovieReducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  export default store