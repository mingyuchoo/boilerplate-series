import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { ApolloClient, ApolloProvider, HttpLink } from "@apollo/client";
import cache from "./cache";

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphq",
});

const client = new ApolloClient({
  link: httpLink,
  cache: cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);

reportWebVitals();
