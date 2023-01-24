import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'filters',
    initialState: {
        search: '',
    },
    reducers: {
        searchSomeThing: (state, action) => {
            state.search = action.payload;
        },
    },
});

export default searchSlice;
