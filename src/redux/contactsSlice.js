import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: false,
  },
  filters: {
    name: "",
  },
};

const slice = createSlice({
  name: "contacts",
  initialState,
  // reducers: {
  //   deleteContact: (state, action) => {
  //     state.contacts.items = state.contacts.items.filter(
  //       (contact) => contact.id !== action.payload
  //     );
  //   },
  //   addContact: (state, action) => {
  //     state.contacts.items.push(action.payload);
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.loading = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          (contact) => contact.id !== action.payload
        );
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          deleteContact.pending,
          addContact.pending
        ),
        (state) => {
          state.contacts.loading = true;
          state.contacts.error = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          deleteContact.rejected,
          addContact.rejected
        ),
        (state) => {
          state.contacts.loading = false;
          state.contacts.error = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          deleteContact.fulfilled,
          addContact.fulfilled
        ),
        (state) => {
          state.contacts.loading = false;
        }
      );
  },
});

export const contactsReducer = slice.reducer;
// export const { deleteContact, addContact } = slice.actions;
