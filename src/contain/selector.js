import { createSelector } from '@reduxjs/toolkit';

export const dataSelector = (state) => state.dataList;
export const searchTextSelector = (state) => state.filters.search;

export const resultSearchsShow = createSelector(
    dataSelector,
    searchTextSelector,
    (dataList, searchText) => {
        return dataList.filter((dataInput) => {
            return (
                dataInput.name.includes(searchText) ||
                dataInput.price.includes(searchText)
            );
        });
    },
);
