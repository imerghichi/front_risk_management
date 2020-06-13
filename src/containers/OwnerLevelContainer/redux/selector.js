
import { createSelector } from 'reselect';
const storeName = 'ownerLevel';

export const ownerLevelSelector = createSelector(
    state => state[storeName],
    state => state.frequencies
);

export const ownerLevelSuccessSelector = createSelector(
    state => state[storeName],
    state => state.success
);

export const ownerLevelErrorSelector = createSelector(
    state => state[storeName],
    state => state.error
);
export const ownerLevelLoadingSelector = createSelector(
    state => state[storeName],
    state => state.loading
);
