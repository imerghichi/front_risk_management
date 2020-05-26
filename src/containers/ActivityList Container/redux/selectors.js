import { createSelector } from 'reselect';
const storeName = 'activityList';

export const activityListSelector = createSelector(
    state => state[storeName],
    state => state.activityList
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