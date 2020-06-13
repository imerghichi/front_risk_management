import {createSelector} from "reselect";

const storname= 'origin';

export const originSelector = createSelector(
    state => state[storname],
    state =>state.frequencies
);

export const originSelectorError = createSelector(
    state => state[storname],
    state =>state.error
);

export const originSelectorSuccess = createSelector(
    state => state[storname],
    state =>state.success
);
export const originSelectorLoading = createSelector(
    state => state[storname],
    state =>state.loading
);

