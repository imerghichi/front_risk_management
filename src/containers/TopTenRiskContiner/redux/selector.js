import { createSelector } from 'reselect';
const storeName = 'topRisk';

export const topRiskSelector = createSelector(
    state => state[storeName],
    state => state.topRisk
);

export const topRiskSuccessSelector = createSelector(
    state => state[storeName],
    state => state.success
);

export const topRiskErrorSelector = createSelector(
    state => state[storeName],
    state => state.error
);

export const topRiskLoadingSelector = createSelector(
    state => state[storeName],
    state => state.loading
);
