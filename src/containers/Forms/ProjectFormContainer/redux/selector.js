import { createSelector } from 'reselect';

const storeName = 'projectForm';

export const projectFormSelector = createSelector(
    state => state[storeName],
);

export const projectFormSuccessSelector = createSelector(
    state => state[storeName],
    state => state.success
);

export const projectFormErrorSelector = createSelector(
    state => state[storeName],
    state => state.error
);

export const projectFormLoadingSelector = createSelector(
    state => state[storeName],
    state => state.loading
);
