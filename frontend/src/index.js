import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider as UrqlProvider } from 'urql';
import { Provider  } from 'react-redux';
import store, { client } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
      <Provider store={store}>
      <UrqlProvider value={client}>
      <App />
      </UrqlProvider>
      </Provider>
);
