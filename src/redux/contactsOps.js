import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66cc7349a4dd3c8a71b7a9d5.mockapi.io/";
axios.get("contacts");

export const fetchContacts = createAsyncThunk(
  "fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("contacts");
      // console.log(data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "deleteContact",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`contacts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "addContact",
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post("contacts", body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
