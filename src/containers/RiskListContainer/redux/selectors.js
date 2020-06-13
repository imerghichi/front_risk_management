import { createSelector } from 'reselect';
const storeName = 'riskList';

export const riskListSelector = createSelector(
    state => state[storeName],
    state => state.riskList
);

export const riskListSuccessSelector = createSelector(
    state => state[storeName],
    state => state.success
);

export const riskListErrorSelector = createSelector(
    state => state[storeName],
    state => state.error
);

export const riskListLoadingSelector = createSelector(
    state => state[storeName],
    state => state.loading
);
