import { createStore, combineReducers } from "redux";
import { Client, cacheExchange, fetchExchange } from "urql";

export const client = new Client({
  url: "http://localhost:1337/graphql",
  exchanges: [cacheExchange, fetchExchange],
});

const store = createStore(combineReducers({}));
export default store;
