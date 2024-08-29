import { createSelector } from "@reduxjs/toolkit";

export const selectorContacts = (state) => state.contacts.contacts.items;
export const selectFilter = (state) => state.filter.filters.name;
export const selectIsLoading = (state) => state.contacts.contacts.loading;
export const selectIsError = (state) => state.contacts.contacts.error;
export const selectFilteredContacts = createSelector(
  [selectorContacts, selectFilter],
  (contacts, filteredContacts) => {
    const filteredData = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filteredContacts.toLowerCase())
    );
    return filteredData;
  }
);
