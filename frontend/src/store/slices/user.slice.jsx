import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    id: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { token, id } = action.payload;
            state.token = token;
            state.id = id;
        },
        clearCredentials: (state) => {
            state.token = null;
            state.id = null;
        },
    },
});

export const { setCredentials, clearCredentials } = userSlice.actions;
export default userSlice.reducer;
