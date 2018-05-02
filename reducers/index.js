import { combineReducers } from 'redux';
import  userReducer  from './User';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['user']
};

const userPersistConfig = {
  key: 'user',
  storage: storage,
  blacklist: ['isIncorrectCredentials']
};

const reducers =  combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
});

export default persistReducer(rootPersistConfig, reducers);