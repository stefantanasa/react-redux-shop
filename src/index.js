import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import Provider component and then the store. It will be our State
// Throuigh Provider we connect the store to the react app
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  <React.StrictMode>
    {/* wrap the App into Provider tags and add as a pop store
     where we'll give the store imported above */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
