import { createSelector } from 'reselect';

const storeName = 'activityForm';

export const riskFormSelector = createSelector(
    state => state[storeName],
);

export const activityFormSuccessSelector = createSelector(
    state => state[storeName],
    state => state.success
);

export const activityFormErrorSelector = createSelector(
    state => state[storeName],
    state => state.error
);

export const activityFormLoadingSelector = createSelector(
    state => state[storeName],
    state => state.loading
);
