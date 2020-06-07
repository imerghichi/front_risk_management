import { createSelector } from 'reselect';

const storeName = 'causalTree';

export const causalTreeSelector = createSelector(
    state => state[storeName],
    state => state.causalTree
);

export const causalTreeSuccessSelector = createSelector(
    state => state[storeName],
    state => state.success
);

export const causalTreeErrorSelector = createSelector(
    state => state[storeName],
    state => state.error
);

export const causalTreeLoadingSelector = createSelector(
    state => state[storeName],
    state => state.loading
);
