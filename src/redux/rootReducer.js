// import { configureStore } from '@reduxjs/toolkit';
// import { exercisesReducer } from './reducer';
// export const store = configureStore({
//   reducer: exercisesReducer,
// });

import { combineReducers } from '@reduxjs/toolkit';
import { authReduser } from './Authorization/authSlise';
// import { contactsReduser } from './Contacts/contactsSlise';
// import { filterReducer } from './Contacts/filterSlice';
import storage from 'redux-persist/lib/storage'; // це для локалстореджа
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { profileReducer } from './Profile/currentUserSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

export const reducer = combineReducers({
  auth: persistReducer(persistConfig, authReduser),
  profile: profileReducer,
  // filter: filterReducer,
  // contacts: contactsReduser,
});
