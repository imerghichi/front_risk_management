import { createSelector } from 'reselect';

const storeName = 'riskForm';

export const riskFormSelector = createSelector(
    state => state[storeName],
);

export const riskFormuccessSelector = createSelector(
    state => state[storeName],
    state => state.success
);

export const riskFormErrorSelector = createSelector(
    state => state[storeName],
    state => state.error
);

export const riskFormLoadingSelector = createSelector(
    state => state[storeName],
    state => state.loading
);
