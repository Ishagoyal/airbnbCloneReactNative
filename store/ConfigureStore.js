import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk'

import reducers from '../reducers';

const persistConfiq = {
  key:  'root',
  storage : storage,
}

const persistedReducer = persistReducer(persistConfiq, reducers);

export const store = createStore(
  persistedReducer,
  applyMiddleware(
    thunkMiddleware,
  )
);
export const persistor = persistStore(store);

