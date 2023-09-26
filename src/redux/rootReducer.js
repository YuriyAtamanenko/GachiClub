// import { configureStore } from '@reduxjs/toolkit';
import { exercisesReducer } from "../redux/Exercises/reducer";
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
import { profileReducer } from './Profile/profileSlice';
import { productsReducer } from './Products/productsSlice';

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
  exercises: exercisesReducer,
  profile: profileReducer,
  products: productsReducer,
  // filter: filterReducer,
  // contacts: contactsReduser,
});
