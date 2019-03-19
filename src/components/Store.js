import { createStore } from "redux";
import  state  from "../state"
import reducers from '../Reducers/index';

let store = createStore(reducers, state);

export default store;
