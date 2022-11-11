import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFiltersQuery = state => state.filters.query;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFiltersQuery],
  (contacts, contactsFilter) => {
    const outputContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(contactsFilter)
    );

    return outputContacts;
  }
);
