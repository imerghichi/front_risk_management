import { createSelector } from 'reselect';
const storeName = 'topRisk';

export const topRiskSelector = createSelector(
    state => state[storeName],
    state => state.topRisk
);

export const activityListSuccessSelector = createSelector(
    state => state[storeName],
    state => state.success
);

export const activityListErrorSelector = createSelector(
    state => state[storeName],
    state => state.error
);

export const activityListLoadingSelector = createSelector(
    state => state[storeName],
    state => state.loading
);
