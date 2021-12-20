import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StateProvider } from "../src/components/stateProvider/StateProvider";
import reducer, { initialState } from "./reducer";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51K8TyeSA4k3N3EwFkev9itWmqjgBb3JKGzm10zPbtBZD6JYlIE35d7Dgq6EHXnBl39XvnddS86oUV4v8lRI72Vev00LGYgw6WA"
);

const client = new ApolloClient({
  uri: "https://marketplace-app.can.canonic.dev/graphql",
  cache: new InMemoryCache(),
});
const options = {
  // passing the client secret obtained from the server
  clientSecret:
    "sk_test_51K8TyeSA4k3N3EwFW612M8fGHikJ6Gm4XCXt7xFmEH8F361mjHBSH1lB8nLpxgmr9CP1MRSYuuSTsTRliHX9cGiw00AC45VCPm",
};
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Elements stripe={stripePromise} options={options}>
        <StateProvider initialState={initialState} reducer={reducer}>
          <App />
        </StateProvider>
      </Elements>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
