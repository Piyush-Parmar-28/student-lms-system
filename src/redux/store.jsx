import { legacy_createStore as createStore } from "redux";
import allReducers from "./reducers/allReducers.tsx";

const store = createStore(
  allReducers,
  //  Allow our chrome browser redux extension to check our redux state
  //  Use the git link to add this: https://github.com/reduxjs/redux-devtools/tree/main/extension#installation
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
