import { createStore } from "redux";
import cakeReducer from "./reducer/cakeReducer";

const initialstate = {};

const store = createStore(cakeReducer , initialstate);

export default store;
