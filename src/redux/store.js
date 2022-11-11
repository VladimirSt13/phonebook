import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './cotactsSlice';
import { filtersReducer } from './fitersSlice';

const rootReducer = combineReducers({
  contacts: contactsReduser,
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
