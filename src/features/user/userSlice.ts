import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type User = {
  id: number;
  name: string;
};

type InitialState = {
  loading: boolean;
  users: User[];
  error: string;
};

const initialState: InitialState = {
  loading: false,
  users: [],
  error: "",
};

//The createAsyncThunk function takes two arguments. the first argument is the action type string and the second argument is a
//callback function that should contain the async logic and return a promise. The action type string that we pass here will be
//used as a prefix for the promise lifecycle actions which are pending, fulfilled and rejected action types, which will be
//generated and dispatched by the createAsyncThunk function and we can listen to these actions by using extra reducers of the
//createSlice method. Here we don't have a catch block because we are not handling the error, createAsyncThunk will automatically
//handle the error for us.
//NOTE: The createAyncThunk method, under the hood, makes use of the redux-thunk library. So we don't have to install the
//redux-thunk library explicitly. It is already included in the redux toolkit package. So, under the hood thunk gets applied as
//a default middleware to our store.
export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default userSlice.reducer;
