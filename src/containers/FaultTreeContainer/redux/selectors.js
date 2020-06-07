import { createSelector } from 'reselect';
const storeName = 'faultTree';

export const faultTreeSelector = createSelector(
    state => state[storeName],
    state => state.faultTree
);

export const faultTreeSuccessSelector = createSelector(
    state => state[storeName],
    state => state.success
);

export const faultTreeErrorSelector = createSelector(
    state => state[storeName],
    state => state.error
);

export const faultTreeLoadingSelector = createSelector(
    state => state[storeName],
    state => state.loading
);
