import { createSelector } from 'reselect';

const storeName = 'portfolioForm';

export const portfolioFormSelector = createSelector(
    state => state[storeName],
);

export const portfolioFormSuccessSelector = createSelector(
    state => state[storeName],
    state => state.success
);

export const portfolioFormErrorSelector = createSelector(
    state => state[storeName],
    state => state.error
);

export const portfolioFormLoadingSelector = createSelector(
    state => state[storeName],
    state => state.loading
);
