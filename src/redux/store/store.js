import { legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { root } from "../reducer";

export const store = legacy_createStore(
  root,
  composeWithDevTools()
);
