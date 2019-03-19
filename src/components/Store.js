import { createStore } from 'redux';
import { state } from '../state';
import { reducers } from '../Reducers/index';

const store = Redux.createStore(reducers, state);

export default { Store };