import { configureStore } from '@reduxjs/toolkit';

import { ContactsReducer } from './ContactSlice';
import { filterReducer } from './FilterSlice';

export const store = configureStore({
  reducer: {
    contacts: ContactsReducer,
    filter: filterReducer,
  },
});
