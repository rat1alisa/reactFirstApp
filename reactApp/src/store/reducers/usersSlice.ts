import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

// Тип состояния пользователей
type UsersState = {
  users: User[];
  loading: boolean;
  error: string | null;
};

// Начальное состояние
const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk<User[]>("users/fetchUsers", async () => {
    const response = await axios.get<User[]>(API_URL);
    return response.data;
});

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
          state.users.push(action.payload);
        },
        updateUser: (state, action: PayloadAction<User>) => {
          const index = state.users.findIndex((user) => user.id === action.payload.id);
          if (index !== -1) {
            state.users[index] = action.payload;
          }
        },
        deleteUser: (state, action: PayloadAction<number>) => {
          state.users = state.users.filter((user) => user.id !== action.payload);
        },
      },
      extraReducers: (builder) => {
        builder
          .addCase(fetchUsers.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
          })
          .addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Ошибка загрузки пользователей";
          });
      },
});


export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;