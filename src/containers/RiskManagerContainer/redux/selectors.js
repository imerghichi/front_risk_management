import { createSelector } from 'reselect';

const storeName = 'riskMatrix';

export const riskMatrixSelector = createSelector(
    state => state[storeName],
    state => state.riskMatrix
);

export const riskMatrixSuccessSelector = createSelector(
    state => state[storeName],
    state => state.success
);

export const riskMatrixErrorSelector = createSelector(
    state => state[storeName],
    state => state.error
);

export const riskMatrixLoadingSelector = createSelector(
    state => state[storeName],
    state => state.loading
);