import { createStore } from 'redux';
import Reducers from '../reducers';

const store = createStore(reducers);

export default store;