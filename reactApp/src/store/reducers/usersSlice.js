import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react';

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        names: []
    },
    reducers: {
        setUsers: (state, action) => {
            state.names= action.payload;
        },
    },
});

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;