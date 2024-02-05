import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import reportWebVitals from "./reportWebVitals";
import myStore from "./redux/store.jsx";
import { Provider } from "react-redux";

// myStore.subscribe(() =>
//   console.log("getting store state: ", myStore.getState())
// );

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
