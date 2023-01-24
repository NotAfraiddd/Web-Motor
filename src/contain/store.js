import { configureStore } from '@reduxjs/toolkit';
import dataSlice from '~/components/Layout/components/Search/dataSlice';
import searchSlice from '~/components/Layout/components/Search/searchSlice';

const store = configureStore({
    reducer: {
        filters: searchSlice.reducer,
        dataList: dataSlice.reducer, 
    },
});

export default store;
