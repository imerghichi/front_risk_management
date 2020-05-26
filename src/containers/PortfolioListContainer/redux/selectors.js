import { createSelector } from 'reselect';
const storeName = 'portfolioList';

export const portfolioListSelector = createSelector(
    state => state[storeName],
    state => state.portfolioList
);

export const portfolioListSuccessSelector = createSelector(
    state => state[storeName],
    state => state.success
);

export const portfolioListErrorSelector = createSelector(
    state => state[storeName],
    state => state.error
);

export const portfolioListLoadingSelector = createSelector(
    state => state[storeName],
    state => state.loading
);